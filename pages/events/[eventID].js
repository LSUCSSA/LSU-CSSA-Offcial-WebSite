import { useRouter } from "next/router";
import Iframe from "react-iframe";

const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Iframe
        url="https://mp.weixin.qq.com/s?src=11&timestamp=1581048912&ver=2143&signature=zSjL*nUNjAGSYKVh*fhvhDxm7vxwpO383GhT3SoIRB3U6VAY5Nub3mXJYoSdBomuXVxsy56U0mxKjb4xDyQJncBlcdk*v0yzvh7zw6DG4ETIOkh3DrOLsyf-bz-BjPCw&new=1"
      width="100%"
      height="100%"
    />
  );
};

export default EventDetail;
