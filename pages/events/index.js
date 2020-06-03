import fetch from "isomorphic-fetch";
import {Typography, Card, Row, Col, Skeleton, Empty} from "antd";
import {useRouter} from "next/router";
import Link from "next/link";
import {API} from "../../config";
import {useEffect, useState} from "react";

const {Title, Paragraph} = Typography;
const {Meta} = Card;

const EventPage = ({events}) => {
    const router = useRouter();
    const {id} = router.query;
    const remainder = events.length % 3;


    const Column = ({data}) => (
        <Col xs={24} md={8} style={{width: "300"}}>
            {data ? (
                <Link href="/events/[eventID]" as={`/events/${data._id}`}>
                    <Card
                        hoverable
                        title={<div style={{textAlign: 'center'}}>{data.title}</div>}
                        cover={<div
                            style={{
                                backgroundImage: `url(${API + data.thumb_media?.url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: 220
                            }}/>}
                    >
                        <Meta style={{
                            height: "80px",
                            textAlign: 'center',
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            paddingBottom: 0
                        }} description={data.digest}/>
                        <div style={{
                            textAlign: 'right',
                            width: "100%"
                        }}>{new Date(data.update_time).toLocaleDateString()}</div>
                    </Card>
                </Link>
            ) : (
                <Skeleton style={{height: "300px"}}/>
            )}
        </Col>
    );
    const EventsInGrid = () => {
        let data = [];
        for (let i = 0; i < events.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                data.push(
                    <Row type="flex" align="middle" justify="space-between" gutter={[20, 40]}>
                        <Column data={events[i - 2]}/>
                        <Column data={events[i - 1]}/>
                        <Column data={events[i]}/>
                    </Row>
                );
            }
            if (i === events.length - (remainder - 1) - 1) {
                data.push(
                    <Row type="flex" align="middle" justify="space-between" gutter={[20, 40]}>
                        {[...Array(remainder).keys()].map(val => {
                            return <Column data={events[i + val]}/>;
                        })}
                    </Row>
                );
            }
        }
        return data.length !== 0 ? (
            data
        ) : (
            <Empty style={{width: "100%", height: "100%"}} description={false}/>
        );
    };
    return <EventsInGrid/>;
};

export async function getStaticProps() {
    // const token = await fetch(`${API}/wechat/accessToken`);
    const res = await fetch(`${API}/articles`,);
    const json = await res.json();
    return {props: {events: json}};
}


export default EventPage;
