import React, {useState} from 'react';
import {Upload, message, Spin} from 'antd';
import {CloudUploadOutlined} from '@ant-design/icons';
import styles from './index.less';
import token from '@/utils/token';

const {Dragger} = Upload;

export default ({onFinished}) => {
  const [loading, setLoading] = useState(false);
  const props = {
    name: "file",
    accept: '.csv',
    multiple: false,
    showUploadList: false,
    action: "/api/bulkCreate",
    headers: {
      Authorization: `Bearer ${token.get()}`,
    },
    onChange(info) {
      const {status, response} = info.file;

      if (status === 'uploading') {
        setLoading(true);
      }
      if (status === "done") {
        setLoading(false);
        if (response.status === 'success') {
          message.success(`${info.file.name} file uploaded successfully.`);
          if(onFinished){
            onFinished();
          }
        }
      } else if (status === "error") {
        if (response.status === 'fail') {
          if (response.message) {
            message.error(`${info.file.name}${response.message}`);
          } else {
            message.error(`${info.file.name} file upload failed.`);
          }
        }
      }
    }
  };
  return <Spin tip="Uploading..." spinning={loading} delay={500}>
    <div className={styles.container}>
      <div id="components-upload-demo-drag">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined/>
          </p>
          <p className="ant-upload-text">
            点击或者拖入TigerLink成员名单
          </p>
        </Dragger>
      </div>
    </div>
  </Spin>
};
