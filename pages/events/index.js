import fetch from "isomorphic-fetch";
import { Typography, Card, Row, Col, Skeleton } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const EventPage = ({ events }) => {
  //   console.log(events);
  const remainder = events.length % 3;
  const Column = ({ data }) => (
    <Col md={8}>
      {data ? (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={data.title} description={data.content} />
        </Card>
      ) : (
        <Skeleton />
      )}
    </Col>
  );
  return events.filter((e, i) => {
    if (i % 3 === 0 || i % 3 === 3) {
      <Row>
        <Column data={events[i - 2]} />
        <Column data={events[i - 1]} />
        <Column data={events[i]} />
      </Row>;
    }
    if (i === events.length - remainder) {
      <Row>
        {[...Array(remainder).keys()].map((val, j) => (
          <Column data={events[i + j]} />
        ))}
      </Row>;
    }
    // if (
    //   Array.from(
    //     new Array(events.length),
    //     (x, i) => i + (events.length - remainder)
    //   ).includes(i)
    // ) {
    // }
  });
};
EventPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:1337/editors");
  const json = await res.json();
  return { events: json };
};
export default EventPage;
