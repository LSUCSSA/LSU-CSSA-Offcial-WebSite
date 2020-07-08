import {Typography} from "antd"
import fetch from "isomorphic-fetch";
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

const {Title} = Typography;


const NewComer = ({url}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <Title level={2}>接机系统</Title>
            <a target="_blank" rel="noopener noreferrer" ></a>
            <Title level={2}>新生手册</Title>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div style={{ height: '750px', marginLeft: '20%', marginRight: '20%'}}>
                    <Viewer fileUrl={`${process.env.NEXT_PUBLIC_API+url}`} />
                </div>
            </Worker>
        </div>
    )
};
NewComer.getInitialProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/newcomer-guide`);
    const pdfLink = await res.json();
    return {url: pdfLink.guideFileUrl};
};
export default NewComer
