import { useRouter } from "next/router";
import Iframe from "react-iframe";

const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Iframe
      url="https://mp.weixin.qq.com/s?__biz=MzIwMjAwNDUxMg==&tempkey=MTA0Nl9JaUpteWZITXQ3aDRuc0dCd01GX3dvbUlpbTRGSk1LRGFEcDNwWVc3TTY3QWhJMVpjTGpCZlNOR3NUd1ZXdkdabS1peF81T0pvdnhndmNQN2kyQzdMaENLcDdNV0tpVk9hMC1rZEZFek5xMy1PNzhNakhoNTBObDlhOHE3S2J5NVFJb3hmdnhBTEI0azZwRkhWalpZbzZUNWNlUGJPSzI2a2otVmh3fn4%3D&chksm=0ee3076639948e702377c7b964d4bcc09784f89b5f8364b2ea68eb14b3e0a2cb92ba7e6b24d3#rd"
      width="100%"
      height="100%"
    />
  );
};

export default EventDetail;
