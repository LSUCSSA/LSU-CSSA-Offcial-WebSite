import {Row, Col, Typography, Card, Empty} from 'antd'
import {API} from "../config"
const {Title} = Typography;
const { Meta } = Card;

const About = ({about}) =>{
    const presidents = about.presidents;
    return <div style={{textAlign: 'center', marginLeft: "5%", marginRight: "5%"}}>
        <Title level={1}>主席团</Title>
        <Row type="flex" align="middle" justify="center">
            {
                presidents ? presidents.map(p =>{
                    <Col xs={24} md={Math.floor(24/presidents.length)}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={p.photo} />}
                        >
                            <Title level={2}>{p.name}</Title>
                            <Meta title={p.title} description={p.description} />
                        </Card>
                    </Col>
                }) : <Empty></Empty>
            }

        </Row>

        </div>
};
About.getInitialProps = async () => {
    const res = await fetch(`${API}/member`);
    const json = await res.json();
    return { about: json };
};
export default About;