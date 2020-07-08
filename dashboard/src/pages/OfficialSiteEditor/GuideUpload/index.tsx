import React from "react";
import styles from "./index.less";
import {Upload, message, Typography} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import token from "@/utils/token";

const {Dragger} = Upload;
const {Title} = Typography;


export default ({onChangeId}) => {
  const props = {
    name: "files",
    multiple: false,
    accept: ".pdf",
    action: "/api/upload",
    headers: {
      Authorization: `Bearer ${token.get()}`,
    },
    onChange(info) {
      const {status} = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        onChangeId({guideFileUrl: info.file.response[0].url})
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div id="components-upload-demo-drag">
        <Title level={3}>上传新生手册</Title>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">
            点击或拖拽上传新生手册
          </p>
          <p className="ant-upload-hint">
            仅支持单文件PDF上传
          </p>
          <p className="ant-upload-hint">
            每次上传会覆盖原有的新生手册
          </p>
        </Dragger>
      </div>
    </div>
  )
};
