import Link from "next/link";
import {useEffect, useState} from "react";
import {Row, Col, Typography, Affix, Menu, Icon} from "antd";
import {MenuOutlined} from '@ant-design/icons';
import styled from 'styled-components'

import {useRouter} from "next/router";

const {Title} = Typography;

const ImageHeader = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url("${props => props.imageURL || '/images/8PXUyg.jpg'}") 50% / cover fixed;
    height: ${props => props.height || '35vh'};
    background-position: ${props => props.height === '100vh' ? 'center' : 'bottom'};
    background-repeat: no-repeat;
    background-size: cover;
`;
const NavBar = ({imageURL, height, fontColor}) => {

    const [selectedKey, setSelectedKey] = useState("/home");
    const [match, setMatch] = useState(false);
    const [collapse, setCollapse] = useState(true);
    const router = useRouter();
    useEffect(() => {
        setSelectedKey(router.route);
        const mobile = window.matchMedia("(max-width: 600px)");
        const checkWidth = (media) => {
            if (media.matches) {
                setMatch(media.matches)
            } else {
                setMatch(false)
            }
        };
        checkWidth(mobile);
        mobile.addListener(checkWidth);
    });
    return (
        <ImageHeader {...{imageURL, height}} >
            <Affix>
                {
                    match ? <MenuOutlined onClick={() => setCollapse(!collapse)} style={{
                        width: "100%",
                        textAlign: "right",
                        fontSize: 32,
                        padding: 10,
                        // color: "white",
                        background: "rgba(0, 0, 0, 0.7)"
                    }}/> : null
                }
                <Menu
                    className="nav"
                    mode={match ? "vertical" : "horizontal"}
                    defaultSelectedKeys={selectedKey}
                    selectedKeys={selectedKey}
                    onClick={e => setSelectedKey(e.key)}
                    style={match ? !collapse ? {display: "block"} : {display: "none"} : null}
                    // style={
                    //     style
                    //         ? style
                    //         : {
                    //             textAlign: "right",
                    //             paddingTop: "3%",
                    //             paddingBottom: "10px",
                    //             background:
                    //                 "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))"
                    //         }
                    // }
                >
                    <Menu.Item key="/home" onClick={() => setCollapse(!collapse)}>
                        <Link href="/" replace>
                            <Title level={3} style={{color: fontColor}}>
                                主页
                            </Title>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={() => setCollapse(!collapse)} key="/info">
                        <Link href="/info" replace>
                            <Title level={3} style={{color: fontColor}}>
                                资讯
                            </Title>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={() => setCollapse(!collapse)} key="/newcomer">
                        <Link href="/newcomer" replace>
                            <Title level={3} style={{color: fontColor}}>
                                新生相关
                            </Title>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={() => setCollapse(!collapse)} key="/about">
                        <Link href="/about" replace>
                            <Title level={3} style={{color: fontColor}}>
                                关于我们
                            </Title>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Affix>
        </ImageHeader>
    );
};
export default NavBar;
