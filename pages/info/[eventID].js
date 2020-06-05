import {useRouter} from "next/router";
import fetch from "isomorphic-fetch";
import {Typography} from "antd";

const {Title, Text} = Typography;

const EventDetail = ({news}) => {
    const router = useRouter();
    // console.log(news.content);

    const {pid} = router.query;

    return (
        <div style={{paddingTop: "20px", maxWidth: "677px", marginLeft: "auto", marginRight: "auto"}}>
            <Title level={2}>{news.title}</Title>
            <Text  type="secondary">{news.author}  {new Date(news.update_time).toLocaleDateString()}</Text>
            <div
                dangerouslySetInnerHTML={{__html: news.content?.replace(/data-src/g, 'src').replace(/src="/g, 'src=http://img01.store.sogou.com/net/a/04/link?appid=100520029&url=')}}/>
        </div>
        // <Iframe
        //     url="https://mp.weixin.qq.com/s?src=11&timestamp=1581048912&ver=2143&signature=zSjL*nUNjAGSYKVh*fhvhDxm7vxwpO383GhT3SoIRB3U6VAY5Nub3mXJYoSdBomuXVxsy56U0mxKjb4xDyQJncBlcdk*v0yzvh7zw6DG4ETIOkh3DrOLsyf-bz-BjPCw&new=1"
        //   width="100%"
        //   height="100%"
        // />
    );
};
EventDetail.getInitialProps = async ctx => {
    // const token = await fetch(`${API}/wechat/accessToken`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/articles/${ctx.query.eventID}`);
    const json = await res.json();
    return {news: json};
};
export default EventDetail;
