import fetch from 'isomorphic-unfetch'
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const EventPage = ({ events }) => {
    console.log(events)
    return events.map(e => (
        <div>
            <Title>{e.title}</Title>
            <Paragraph>{e.content}</Paragraph>
        </div>
    ))
}

EventPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:1337/editors')
    const json = await res.json()
    return { events: json }
}
export default EventPage