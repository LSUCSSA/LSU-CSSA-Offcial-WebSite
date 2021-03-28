import React, {useRef} from "react";
import {
    Row,
    Col,
    Typography,
    Card,
    Skeleton,
    Divider,
    List,
    Empty, Button,
} from "antd";
import {CalendarOutlined, CameraOutlined, CodeOutlined, TeamOutlined} from "@ant-design/icons"
// import Link from "../components/Link"
import Link from "next/Link"

const {Title} = Typography;
const {Meta} = Card;
const shortid = require("shortid");

const About = ({users, sponsors}) => {
    const presidentCard = useRef();
    const departmentCard = useRef();
    const presidents = users.filter((p) => p.department === "Presidents");

    if(presidentCard){
        console.log(presidentCard.current)
    }
    return (
        <Row
            type="flex"
            justify="center"
            align="start"
        >
            <Col span={4}>
                {/*<Row >*/}
                {/*    <Col style={{height: "300px", marginTop: "30%"}}>*/}
                {/*            <span style={{*/}
                {/*                letterSpacing: "0.4em",*/}
                {/*                writingMode: "vertical-rl",*/}
                {/*                textOrientation: "upright",*/}
                {/*                fontSize: "2em",*/}

                {/*            }}>*/}
                {/*        <div style={{borderRight: "2px solid", marginTop: "10%", marginBottom: "10%"}}/>*/}
                {/*    主席团*/}
                {/*    </span>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row >*/}
                {/*    <Col style={{height: "300px", marginTop: "30%"}}>*/}
                {/*        c*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Col>
            <Col span={16} style={{backgroundColor: "white", marginTop: "5%", marginBottom: "5%"}}>
                <div style={{position: "relative"}}>
                    <div style={{
                        zIndex: -1,
                        borderLeft: "2px solid black",
                        height: "96%",
                        width: "100%",
                        position: "absolute",
                        left: "-5%",
                        top: "1%"
                    }}/>
                    <span style={{
                        letterSpacing: "0.4em",
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        fontSize: "2em",
                        position: 'absolute',
                        left: "-15%",
                        top: "8%"
                    }}>
                        主席团
                    </span>
                    <span style={{
                        letterSpacing: "0.4em",
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        fontSize: "2em",
                        position: 'absolute',
                        left: "-15%",
                        top: "35%"
                    }}>
                        部门
                    </span>
                    <span style={{
                        letterSpacing: "0.4em",
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        fontSize: "2em",
                        position: 'absolute',
                        left: "-15%",
                        top: "88%"
                    }}>
                        赞助商
                    </span>
                    <div ref={presidentCard} style={{textAlign: "center", paddingBottom: "20px", marginLeft: "20px", marginRight: "20px"}}>
                        <List grid={{column: 2}} dataSource={presidents} renderItem={p => (
                            <List.Item>
                                <Card
                                    hoverable
                                    // style={{width: 240}}
                                    style={{height: "250px", width: "300px"}}
                                    cover={<img alt={p.name}
                                                src="http://unitedindianhealthservices.org/wp-content/uploads/2017/11/person-placeholder.jpg"/>}
                                >
                                    <Title level={3}>{p.name}</Title>
                                    <Meta title={p.title} description={p.description}/>
                                </Card>
                            </List.Item>
                        )}/>

                        {/*<Row ref={presidentCard} type="flex" align="middle" justify="center" gutter={[32, 8]}>*/}
                        {/*    {presidents.length !== 0 ? (*/}
                        {/*        presidents.map((p) => (*/}
                        {/*            <Col*/}
                        {/*                key={shortid.generate()}*/}
                        {/*                span={Math.floor(24 / presidents.length)}*/}
                        {/*                xs={Math.floor(24 / presidents.length)}*/}
                        {/*                md={Math.floor(24 / presidents.length)}*/}
                        {/*            >*/}
                        {/*                <Card*/}
                        {/*                    hoverable*/}
                        {/*                    // style={{width: 240}}*/}
                        {/*                    style={{height: "300px"}}*/}
                        {/*                    cover={<img alt={p.name}*/}
                        {/*                                src="http://unitedindianhealthservices.org/wp-content/uploads/2017/11/person-placeholder.jpg"/>}*/}
                        {/*                >*/}
                        {/*                    <Title level={3}>{p.name}</Title>*/}
                        {/*                    <Meta title={p.title} description={p.description}/>*/}
                        {/*                </Card>*/}
                        {/*            </Col>*/}
                        {/*        ))*/}
                        {/*    ) : (*/}
                        {/*        <Skeleton/>*/}
                        {/*    )}*/}
                        {/*</Row>*/}
                        <Divider/>
                        <div ref={departmentCard} style={{display: "table"}}>
                            <Card bordered={false} style={{display: "table-cell", width: "50%"}}>
                                <CalendarOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>
                                <Meta
                                    title={<Title level={3}>活动策划部</Title>}
                                    description={
                                        "主要负责策划校内外多姿多彩的活动，丰富大家课余生活,并且促进校内学生组织的联谊和发展长远合作关系。整合学联会资源，集所有CSSA成员之力筹办各类大型晚会，以及组织留学生喜闻乐见的文娱体育和志愿者活动。"
                                    }
                                />
                            </Card>
                            <Card bordered={false} style={{display: "table-cell", width: "50%"}}>
                                <CameraOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>
                                <Meta
                                    title={<Title level={3}>新闻媒体部</Title>}
                                    description={
                                        "宣传部为学联和各活动制作形式新颖的宣传资料和影像记录，对外扩大学联影响力。宣传我联的所有活动和节目。"
                                    }
                                />
                            </Card>
                        </div>
                        <div style={{display: "table", paddingBottom: "5%"}}>
                            <Card bordered={false} style={{display: "table-cell", width: "50%"}}>
                                <CodeOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>
                                <Meta
                                    title={<Title level={3}>网络技术部</Title>}
                                    description={
                                        "负责官网和App的开发及更新，网站后台及其maillist的维护管理，并且为学生会各类活动提供技术与人力支持。"
                                    }
                                />
                            </Card>
                            <Card bordered={false} style={{display: "table-cell", width: "50%"}}>
                                <TeamOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>
                                <Meta
                                    title={<Title level={3}>外联公关部</Title>}
                                    description={
                                        "主要负责与校内外社团院校建立良好关系,保持及时交流与沟通。为学生会日常开销, 大型活动筹集经费以保证各项活动顺利进行。代表学生会,作为学生会与各大商家,媒体,华人组织交流的窗口,为广大中国学生的衣食住行各方面谋福利。负责大型活动的对外联系,包括联系嘉宾,制作发送邀请函,安排礼仪接待等工作。"
                                    }
                                />
                            </Card>
                        </div>

                        {/*<Row type="flex" align="top" justify="center" gutter={[32, 8]}>*/}
                        {/*    <Col xs={24} md={12} >*/}
                        {/*        <Card bordered={false} >*/}
                        {/*            <CalendarOutlined style={{fontSize: 64, padding: 32 , minHeight: "100%"}}/>*/}
                        {/*            <Meta*/}
                        {/*                title={<Title level={3}>活动策划部</Title>}*/}
                        {/*                style={{minHeight: 250}}*/}
                        {/*                description={*/}
                        {/*                    "主要负责策划校内外多姿多彩的活动，丰富大家课余生活,并且促进校内学生组织的联谊和发展长远合作关系。整合学联会资源，集所有CSSA成员之力筹办各类大型晚会，以及组织留学生喜闻乐见的文娱体育和志愿者活动。"*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col xs={24} md={12} >*/}
                        {/*        <Card bordered={false} >*/}
                        {/*            <CameraOutlined style={{fontSize: 64, padding: 32,minHeight: "100%"}}/>*/}
                        {/*            <Meta*/}
                        {/*                title={<Title level={3}>新闻媒体部</Title>}*/}
                        {/*                style={{minHeight: 250}}*/}
                        {/*                description={*/}
                        {/*                    "宣传部为学联和各活动制作形式新颖的宣传资料和影像记录，对外扩大学联影响力。宣传我联的所有活动和节目。"*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col xs={24} md={12} >*/}
                        {/*        <Card bordered={false} >*/}
                        {/*            <CodeOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>*/}
                        {/*            <Meta*/}
                        {/*                title={<Title level={3}>网络技术部</Title>}*/}
                        {/*                style={{minHeight: 250}}*/}
                        {/*                description={*/}
                        {/*                    "负责官网和App的开发及更新，网站后台及其maillist的维护管理，并且为学生会各类活动提供技术与人力支持。"*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col xs={24} md={12} >*/}
                        {/*        <Card bordered={false} >*/}
                        {/*            <TeamOutlined style={{fontSize: 64, padding: 32, minHeight: "100%"}}/>*/}
                        {/*            <Meta*/}
                        {/*                title={<Title level={3}>外联公关部</Title>}*/}
                        {/*                style={{minHeight: 250}}*/}
                        {/*                description={*/}
                        {/*                    "主要负责与校内外社团院校建立良好关系,保持及时交流与沟通。为学生会日常开销, 大型活动筹集经费以保证各项活动顺利进行。代表学生会,作为学生会与各大商家,媒体,华人组织交流的窗口,为广大中国学生的衣食住行各方面谋福利。负责大型活动的对外联系,包括联系嘉宾,制作发送邀请函,安排礼仪接待等工作。"*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                        <Link href="/joinUs" replace><img className="joinusButton" src="/joinUs.svg"
                                                          alt="join us"/></Link>
                        {/*<Title style={{paddingTop: 30}} level={1}>赞助商</Title>*/}
                        <List
                            style={{
                                marginTop: "5%",
                                // marginLeft: "15%",
                                // marginRight: "15%",
                                display: "flex",
                            }}
                            grid={{gutter: 16, column: sponsors.col.currVal}}
                            dataSource={sponsors.fileData.currState}
                            renderItem={(item) => (
                                <List.Item>
                                    {item.imageComp ? (
                                        <img
                                            src={`${
                                                process.env.NEXT_PUBLIC_API + item.imageComp.split("/api")[1]
                                            }`}
                                        />
                                    ) : (
                                        <div style={{height: 100}}/>
                                    )}
                                </List.Item>
                            )}
                        />
                        {/*/!*<Empty style={{ height: 300 }} />*!/*/}
                    </div>
                </div>
            </Col>
            <Col span={4}/>
        </Row>
    );
};

export async function getStaticProps() {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API}/users`);
    const sponsors = await fetch(`${process.env.NEXT_PUBLIC_API}/sponsors`);
    const usersJson = await users.json();
    const sponsorsJson = await sponsors.json();
    return {
        props: {
            users: usersJson,
            sponsors: JSON.parse(sponsorsJson.sponsorsList),
        },
    };
}

export default About;
