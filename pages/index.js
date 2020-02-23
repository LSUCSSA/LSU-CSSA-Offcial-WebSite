import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { API } from "../config";
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

const Index = ({ images }) => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ paddingTop: 30 }}>
      <Col span={20}>
        <Carousel autoplay dotPosition="bottom" effect="scrollx">
          {images ? (
            images.map(img => {
              return <img src={API + img.url}></img>;
            })
          ) : (
            <Empty imageStyle={{ height: 500 }} />
          )}
        </Carousel>
      </Col>
    </Row>
  );
};
Index.getInitialProps = async () => {
  const res = await fetch(`${API}/upload/files`);
  const json = await res.json();
  return { images: json };
};
export default Index;
