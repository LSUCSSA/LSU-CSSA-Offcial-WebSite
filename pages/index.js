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
import Router from "next/router";

const Index = ({images}) => {
    return (
        <Row
            type="flex"
            justify="center"
            align="middle"
            style={{paddingTop: 30}}
        >
            <Col span={24}>
                <Carousel
                    className="homeCarousel"
                    autoplay
                    dotPosition="bottom"
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
            </Col>
        </Row>
    );
};

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/image-slide`);
    const json = await res.json();
    return {props: {images: json.slider}};
}

export default Index;
