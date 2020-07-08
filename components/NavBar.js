import Link from "next/link";
import {useEffect, useState} from "react";
import {Row, Col, Typography, Affix, Menu, Icon} from "antd";
import {useRouter} from "next/router";

const {Title} = Typography;

const NavBar = ({style}) => {
    const [selectedKey, setSelectedKey] = useState("/home");
    const router = useRouter();
    useEffect(() => {
        setSelectedKey(router.route)
    });
    return (
        <Affix>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={selectedKey}
                selectedKeys={selectedKey}
                onClick={e => setSelectedKey(e.key)}
                style={
                    style
                        ? style
                        : {
                            textAlign: "right",
                            paddingTop: "3%",
                            paddingBottom: "10px",
                            background:
                                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))"
                        }
                }
            >
                <Menu.Item key="/home">
                    <Link href="/" replace>
                        <Title level={3} style={{color: "white"}}>
                            主页
                        </Title>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/info">
                    <Link href="/info" replace>
                        <Title level={3} style={{color: "white"}}>
                            资讯
                        </Title>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/newcomer">
                    <Link href="/newcomer" replace>
                        <Title level={3} style={{color: "white"}}>
                            新生相关
                        </Title>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Link href="/about" replace>
                        <Title level={3} style={{color: "white"}}>
                            关于我们
                        </Title>
                    </Link>
                </Menu.Item>
            </Menu>
            {/*<Row*/}
            {/*  type="flex"*/}
            {/*  align="middle"*/}
            {/*  justify="end"*/}
            {/*  style={style ?style : {paddingTop: "3%", paddingBottom: "10px", color: "white", background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))"}}*/}
            {/*>*/}
            {/*  <Col span={3}>*/}
            {/*    <Link href="/">*/}
            {/*      <span className="nav">主页</span>*/}
            {/*    </Link>*/}
            {/*  </Col>*/}
            {/*  <Col span={3}>*/}
            {/*    <Link href="/info">*/}
            {/*      <span className="nav">活动</span>*/}
            {/*    </Link>*/}
            {/*  </Col>*/}
            {/*  <Col span={3}>*/}
            {/*    <Link href="/">*/}
            {/*      <span className="nav">校园资讯</span>*/}
            {/*    </Link>*/}
            {/*  </Col>*/}
            {/*  <Col span={3}>*/}
            {/*    <Link href="/about">*/}
            {/*      <span className="nav">关于我们</span>*/}
            {/*    </Link>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
        </Affix>
    );
};
export default NavBar;
