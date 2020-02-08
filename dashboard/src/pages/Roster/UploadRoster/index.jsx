import React from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Dragger } = Upload;
const props = {
  name: 'file',
  accept: '.csv',
  multiple: false,
  showUploadList: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default () => (
  <div className={styles.container}>
    <div id="components-upload-demo-drag">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <CloudUploadOutlined />
        </p>
        <p className="ant-upload-text">点击或者拖入TigerLink成员名单</p>
        {/*<p className="ant-upload-hint">*/}
        {/*  Support for a single or bulk upload. Strictly prohibit from uploading company data or*/}
        {/*  other band files*/}
        {/*</p>*/}
      </Dragger>
    </div>
  </div>
);
