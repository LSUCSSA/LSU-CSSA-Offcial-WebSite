import './styles.css';
import { Row, Col, Typography, Affix } from 'antd';
import Link from 'next/link'
import { withRouter } from 'next/router';

const { Title } = Typography;


function MyApp({ router, Component, pageProps }) {
    return (
        <div className="App">
            {
                router.pathname === '/' ? <div className="ImageHeader">
                    <Affix>
                        <Row type="flex" align="middle" justify="end" style={{ paddingTop: "5%", color: "white"}}>
                            <Col span={3}><Link href="/"><span className="nav">主页</span></Link></Col>
                            <Col span={3}><Link href="/events"><span className="nav">活动</span></Link></Col>
                            <Col span={3}><Link href="/"><span className="nav">校园资讯</span></Link></Col>
                            <Col span={3}><Link href="/about"><span className="nav">关于我们</span></Link></Col>
                        </Row>
                    </Affix>
                </div> : null
            }
            
            <Component style="Container" {...pageProps} />
            <div>
                <Row className="Footer" type="flex" align="middle" justify="center">
                    <Col xs={4} md={2} ><img style={{ margin: '20px' }} src="/images/cssa_qr.jpeg" /></Col>
                    <Col xs={10} md={18}></Col>
                    <Col xs={10} md={4}>
                        Louisiana State Univeristy
                    <br />
                        All Rights Reserved
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(MyApp)