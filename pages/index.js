import {useState, useEffect} from "react";
import fetch from "isomorphic-fetch";
const shortid = require('shortid');

import {
    Layout,
    Row,
    Col,
    Menu,
    Typography,
    Empty,
    Carousel,
    Divider
} from "antd";
import Router from "next/router";

const Index = ({images}) => {
    return (
        <Row type="flex" justify="center" align="middle" style={{paddingTop: 30, paddingBottom: 30}}>
            <Col span={20}>
                <Carousel autoplay dotPosition="bottom" effect="scrollx" style={{
                    objectFit: "cover",  height: "400px",  overflow: "hidden", objectPosition: "center"
                }}>
                    {images ? (
                        images.map(img => {
                            return <img key={shortid.generate()} src={process.env.NEXT_PUBLIC_API + img.url} alt={img.url}  />;
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/upload/files`);
    const json = await res.json();
    return {props: {images: json}};
}

export default Index;
