import { useState, useEffect } from 'react'
import { Layout, Row, Col, Menu, Typography, Empty, Carousel } from 'antd';
import Router from 'next/router'


function Index() {

    return (
        <Row type='flex' justify="center" align='middle' className="Container">
            <Col span={20}>
                <Carousel autoplay >
                    <Empty imageStyle={{ height: 500 }} />
                </Carousel>
            </Col>
        </Row>
    )
}

export default Index