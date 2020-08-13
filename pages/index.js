import {useState, useEffect} from "react";

const shortid = require("shortid");

import {
    Layout,
    Row,
    Col,
    Menu,
    Typography,
    Empty,
    Carousel,
    Divider,
} from "antd";
import {useRouter} from "next/router";

const Index = ({images}) => {
    const router = useRouter();

    return (
        <>
            <Row
                type="flex"
                justify="center"
                align="start"
                style={{paddingTop: "3%"}}
            >
                <Col span={2}/>
                <Col span={2} style={{marginTop: "5%"}}>
                    <span style={{
                        letterSpacing: "0.4em",
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        fontSize: "2em"
                    }}><div style={{borderRight: "2px solid", marginTop: "10%", marginBottom: "10%"}}/>活动&公告</span>

                </Col>
                <Col span={16} style={{backgroundColor: "white"}}>
                    <Carousel
                        className="homeCarousel"
                        autoplay
                        dotPosition="right"
                        effect="scrollx"

                    >
                        {images ? (
                            images.map((img) => {
                                return (
                                    <img
                                        key={shortid.generate()}
                                        src={process.env.NEXT_PUBLIC_API + img.url}
                                        alt={img.url}
                                    />
                                );
                            })
                        ) : (
                            <Empty imageStyle={{height: 500}}/>
                        )}
                    </Carousel>
                    {/*<Divider style={{borderBottom: "1px solid", margin: "5%"}}/>*/}
                    <div style={{borderBottom: "1px solid", color: "#616161", margin: "7%"}}/>
                </Col>
                <Col span={2}/>
                <Col span={2}/>
            </Row>

        </>
    );
};

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/image-slide`);
    const json = await res.json();
    return {props: {images: json.slider}};
}

export default Index;
