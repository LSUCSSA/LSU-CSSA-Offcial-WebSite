import { Row, Col, Typography, Affix } from "antd";
import Link from "next/link";
export default function NavBar({ style }) {
  return (
    <Affix>
      <Row
        type="flex"
        align="middle"
        justify="end"
        style={style ? style : { paddingTop: "5%", color: "white" }}
      >
        <Col span={3}>
          <Link href="/">
            <span className="nav">主页</span>
          </Link>
        </Col>
        <Col span={3}>
          <Link href="/events">
            <span className="nav">活动</span>
          </Link>
        </Col>
        <Col span={3}>
          <Link href="/">
            <span className="nav">校园资讯</span>
          </Link>
        </Col>
        <Col span={3}>
          <Link href="/about">
            <span className="nav">关于我们</span>
          </Link>
        </Col>
      </Row>
    </Affix>
  );
}