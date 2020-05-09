import { useRouter } from "next/router";
import Iframe from "react-iframe";
import { API } from "../../config";

const EventDetail = ({req, res}) => {
  const router = useRouter();
  // console.log(router)
  const { pid } = router.query;

  return (
    <Iframe
        url="https://mp.weixin.qq.com/s?src=11&timestamp=1581048912&ver=2143&signature=zSjL*nUNjAGSYKVh*fhvhDxm7vxwpO383GhT3SoIRB3U6VAY5Nub3mXJYoSdBomuXVxsy56U0mxKjb4xDyQJncBlcdk*v0yzvh7zw6DG4ETIOkh3DrOLsyf-bz-BjPCw&new=1"
      width="100%"
      height="100%"
    />
  );
};
EventDetail.getInitialProps = async ctx => {
  // const token = await fetch(`${API}/wechat/accessToken`);
  const res = await fetch(`${API}/articles/${ctx.query}`);
  const json = await res.json();
  console.log(ctx)
  return { news: json };
};
export default EventDetail;
