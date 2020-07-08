import {
    Row,
    Col,
    Typography,
    Card,
    Skeleton,
    Icon,
    Divider,
    List,
    Empty
} from "antd";
import fetch from "isomorphic-fetch";

const {Title} = Typography;
const {Meta} = Card;

const About = ({users, sponsors}) => {
    const presidents = users.filter(p => p.department === "Presidents");
    return (
        <div style={{textAlign: "center", margin: "5%"}}>
            <Title level={1}>主席团</Title>
            <Divider/>
            <Row type="flex" align="middle" justify="center" gutter={[32, 8]}>
                {presidents.length !== 0 ? (
                    presidents.map(p => (
                        <Col span={Math.floor(24 / presidents.length)} xs={Math.floor(24 / presidents.length)}
                             md={Math.floor(24 / presidents.length)}>
                            <Card
                                hoverable
                                // style={{width: 240}}
                                cover={<img alt={p.name} src={p.photo}/>}
                            >
                                <Title level={3}>{p.name}</Title>
                                <Meta title={p.title} description={p.description}/>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Skeleton/>
                )}
            </Row>
            <Title level={1}>部门</Title>
            <Divider/>
            <Row type="flex" align="top" justify="center" gutter={[32, 8]}>
                <Col xs={24} md={12} style={{minHeight: 300}}>
                    <Card bordered={false}>
                        <Icon type="calendar" style={{fontSize: 64, padding: 32}}/>
                        <Meta
                            title={<Title level={3}>活动策划部</Title>}
                            description={
                                "主要负责策划校内外多姿多彩的活动，丰富大家课余生活,并且促进校内学生组织的联谊和发展长远合作关系。整合学联会资源，集所有CSSA成员之力筹办各类大型晚会，以及组织留学生喜闻乐见的文娱体育和志愿者活动。"
                            }
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} style={{minHeight: 300}}>
                    <Card bordered={false}>
                        <Icon type="camera" style={{fontSize: 64, padding: 32}}/>
                        <Meta
                            title={<Title level={3}>新闻媒体部</Title>}
                            description={
                                "宣传部为学联和各活动制作形式新颖的宣传资料和影像记录，对外扩大学联影响力。宣传我联的所有活动和节目。"
                            }
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} style={{minHeight: 300}}>
                    <Card bordered={false}>
                        <Icon type="code" style={{fontSize: 64, padding: 32}}/>
                        <Meta
                            title={<Title level={3}>网络技术部</Title>}
                            description={
                                "负责官网和App的开发及更新，网站后台及其maillist的维护管理，并且为学生会各类活动提供技术与人力支持。"
                            }
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} style={{minHeight: 300}}>
                    <Card bordered={false}>
                        <Icon type="team" style={{fontSize: 64, padding: 32}}/>
                        <Meta
                            title={<Title level={3}>外联公关部</Title>}
                            description={
                                "主要负责与校内外社团院校建立良好关系,保持及时交流与沟通。为学生会日常开销, 大型活动筹集经费以保证各项活动顺利进行。代表学生会,作为学生会与各大商家,媒体,华人组织交流的窗口,为广大中国学生的衣食住行各方面谋福利。负责大型活动的对外联系,包括联系嘉宾,制作发送邀请函,安排礼仪接待等工作。"
                            }
                        />
                    </Card>
                </Col>
            </Row>
            <Title level={1}>赞助商</Title>
            <List grid={{gutter: 16, column: sponsors.col.currVal}} dataSource={sponsors.fileData.currState}
                  renderItem={item => (
                      <List.Item>
                          {
                              item.imageComp ?
                                  <img style={{height: 100}}
                                       src={`${process.env.NEXT_PUBLIC_API + item.imageComp.split("/api")[1]}`}/> :
                                  <div style={{height: 100}}/>
                          }
                      </List.Item>
                  )}
            >
            </List>
            {/*/!*<Empty style={{ height: 300 }} />*!/*/}
        </div>
    );
};
About.getInitialProps = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API}/users`);
    const sponsors = await fetch(`${process.env.NEXT_PUBLIC_API}/getSponsorComp`);
    const usersJson = await users.json();
    const sponsorsJson = await sponsors.json();
    return {users: usersJson, sponsors: JSON.parse(sponsorsJson.sponsorsList)};
};
export default About;
