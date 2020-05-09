import fetch from "isomorphic-fetch";
import { Typography, Card, Row, Col, Skeleton, Empty } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { API } from "../../config";
import {useEffect, useState} from "react";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const EventPage = ({ events }) => {
  const router = useRouter();
  const { id } = router.query;
  const remainder = events.length % 3;



  const Column = ({ data }) => (
    <Col md={8}>
      {data ? (
        <Link href="/events/[eventID]" as={`/events/${data.id}`}>
          <Card
            hoverable
            title={data.title}
            cover={
              <img
                alt="example"
                src={`data:image/jpeg;charset=utf-8;base64,${data.thumb_media}`}
              />
            }
          >
            <Meta  description={data.digest} />
          </Card>
        </Link>
      ) : (
        <Skeleton />
      )}
    </Col>
  );
  const EventsInGrid = () => {
    let data = [];
    for (let i = 0; i < events.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        data.push(
          <Row type="flex" align="middle" justify="start" gutter={[20, 20]}>
            <Column data={events[i - 2]} />
            <Column data={events[i - 1]} />
            <Column data={events[i]} />
          </Row>
        );
      }
      if (i === events.length - (remainder - 1) - 1) {
        data.push(
          <Row type="flex" align="middle" justify="start" gutter={[20, 20]}>
            {[...Array(remainder).keys()].map(val => {
              return <Column data={events[i + val]} />;
            })}
          </Row>
        );
      }
    }
    return data.length !== 0 ? (
      data
    ) : (
      <Empty style={{ width: "100%", height: "100%" }} description={false} />
    );
  };
  return <EventsInGrid />;
};
EventPage.getInitialProps = async () => {
  // const token = await fetch(`${API}/wechat/accessToken`);
  const res = await fetch(`${API}/articles`);
  const json = await res.json();

  return { events: json };
};
export default EventPage;
