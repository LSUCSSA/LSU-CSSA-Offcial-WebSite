import {useRouter} from "next/router";
import {Typography} from "antd";

const {Title, Text} = Typography;

const EventDetail = ({news}) => {
    const router = useRouter();
    // console.log(news.content);
    // const {pid} = router.query;
    // console.log(news)
    const finalContent =  news.content?.replace(/<iframe [^>]+>(.*?)<\/iframe>/g, "")
        .replace(/data-src/g, "src").replace(/(http(s?):\/\/(.*?)mmbiz.qpic.cn)/ig, process.env.NEXT_PUBLIC_API+"/wechat-image-proxy?url=$1");

    return (
        <div style={{paddingTop: "20px", maxWidth: "677px", marginLeft: "auto", marginRight: "auto"}}>
            <Title level={2}>{news.title}</Title>
            <Text  type="secondary">{news.author}  {new Date(news.update_time).toLocaleDateString()}</Text>
            <div
                dangerouslySetInnerHTML={{__html: finalContent}}/>
        </div>
        // <Iframe
        //     url="https://mp.weixin.qq.com/s?src=11&timestamp=1581048912&ver=2143&signature=zSjL*nUNjAGSYKVh*fhvhDxm7vxwpO383GhT3SoIRB3U6VAY5Nub3mXJYoSdBomuXVxsy56U0mxKjb4xDyQJncBlcdk*v0yzvh7zw6DG4ETIOkh3DrOLsyf-bz-BjPCw&new=1"
        //   width="100%"
        //   height="100%"
        // />
    );
};
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/articles`);
    const news = await res.json();
    return {
        paths: news.map(item => {
            return {params : { eventID: item._id}}
        }),
        fallback: false
    };
}

export async function getStaticProps({params}) {
    // const token = await fetch(`${API}/wechat/accessToken`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/articles/${params.eventID}`);
    const json = await res.json();
    return {props: {news: json}};
}

export default EventDetail;
