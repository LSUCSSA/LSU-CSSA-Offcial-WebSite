import "./styles.css";
import {Row, Col, Typography, Affix} from "antd";
import NavBar from "../components/NavBar.js";
import {withRouter} from "next/router";
import Head from "next/head";
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
const {Title} = Typography;

function MyApp({router, Component, pageProps}) {
    return (
        <div className="App">
            <Head>
                <title>LSU-CSSA 路易斯安娜州州立大学中国学生学者联谊会</title>
            </Head>
            {router.pathname === "/" ? (
                <div className="ImageHeader">
                    <NavBar/>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "65%"
                    }}>
                        {/*<Title className="typewriter" style={{color: "goldenrod", display: "inline-block"}}>*/}
                        {/*    欢迎2020新生*/}
                        {/*</Title>*/}
                    </div>

                </div>
            ) : (
                <NavBar/>
            )}

            <Component classsName="Container" {...pageProps} />
            <div>
                <Row className="Footer" type="flex" align="middle" justify="center">
                    <Col xs={5} md={2}>
                        <img style={{margin: "20px"}} src="/images/cssa_qr.jpeg"/>
                    </Col>
                    <Col xs={7} md={18}></Col>
                    <Col xs={12} md={4}>
                        Louisiana State University
                        <br/>
                        All Rights Reserved
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default withRouter(MyApp);
