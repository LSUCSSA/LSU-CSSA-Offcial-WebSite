import "./styles.css";
import {Row, Col, Typography, Space, Button} from "antd";
import NavBar from "../components/NavBar.js";
import {withRouter} from "next/router";
import Head from "next/head";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined, WeiboOutlined, MailOutlined} from "@ant-design/icons";

const {Title} = Typography;

function MyApp({router, Component, pageProps}) {
    return (
        <div className="App">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <title>LSU-CSSA 路易斯安娜州州立大学中国学生学者联谊会</title>
            </Head>
            {router.pathname === "/" ? (
                <div className="ImageHeader">
                    <NavBar/>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "65%",
                        }}
                    >
                        {/*<Title className="typewriter" style={{color: "goldenrod", display: "inline-block"}}>*/}
                        {/*    欢迎2020新生*/}
                        {/*</Title>*/}
                    </div>
                </div>
            ) : (
                <NavBar/>
            )}

            <Component {...pageProps} />
            <div>
                <Row className="Footer" type="flex" align="middle" justify="center">
                    <Col xs={5} md={2}>
                        <img style={{margin: "20px"}} src="/images/cssa_qr.jpeg"/>
                    </Col>
                    <Col md={1}/>
                    <Col xs={7} md={16}>
                        <Row >
                            <Col span={6}>
                                <Space size="large">
                                    <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" } } href="https://www.facebook.com/LSUCSSA/"><FacebookOutlined style={{fontSize: 30}}/></a>
                                    <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" } } href="https://weibo.com/u/5634241910"><WeiboOutlined  style={{fontSize: 30}}/></a>
                                    <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" } } href="https://www.instagram.com/lsucssa/"><InstagramOutlined style={{fontSize: 30}}/></a>
                                    <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" } } href="https://www.youtube.com/channel/UC2AsR7b05NzprN-m_vWGWaw"><YoutubeOutlined style={{fontSize: 30}}/></a>
                                </Space>
                            </Col>
                            <Col span={18}/>
                        </Row>
                        <br/>
                        <Row>
                            <Button size="default" style={{backgroundColor: "#4b278d", color: "white", borderColor: "#4b278d", }}><MailOutlined/>加入LSU CSSA Maillist</Button>
                        </Row>


                    </Col>
                    <Col xs={12} md={5}>
                        Louisiana State University CSSA
                        <br/>
                        路易斯安娜州州立大学中国学生学者联合会
                        <br/>
                        All Rights Reserved
                        <br/>
                        Built by 林俊, Design by 郑伊琳
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default withRouter(MyApp);
