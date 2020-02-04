import "./styles.css";
import { Row, Col, Typography, Affix } from "antd";
import NavBar from "../components/NavBar.js";
import { withRouter } from "next/router";

const { Title } = Typography;

function MyApp({ router, Component, pageProps }) {
  return (
    <div className="App">
      {router.pathname === "/" ? (
        <div className="ImageHeader">
          <NavBar />
        </div>
      ) : (
        <NavBar />
      )}

      <Component style="Container" {...pageProps} />
      <div>
        <Row className="Footer" type="flex" align="middle" justify="center">
          <Col xs={4} md={2}>
            <img style={{ margin: "20px" }} src="/images/cssa_qr.jpeg" />
          </Col>
          <Col xs={10} md={18}></Col>
          <Col xs={10} md={4}>
            Louisiana State University
            <br />
            All Rights Reserved
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default withRouter(MyApp);
