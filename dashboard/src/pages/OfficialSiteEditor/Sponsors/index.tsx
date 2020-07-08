import React, {useState, useEffect, useRef} from "react";
import {Row, Col, Divider, List, Card, InputNumber, Upload, message, Modal, Typography} from "antd";
import {InboxOutlined, DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import token from "@/utils/token";
import arrayMove from 'array-move';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import styles from "./index.less";

const {Title} =  Typography;
const shortid = require('shortid');

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const {Dragger} = Upload;
const getColInsertPoints = (prevColNum, currColNum, gridLen) => {
  let count = 0;
  let points = [];
  for (let i = 0; i < gridLen; i++) {
    count++;
    if (count > prevColNum) {
      if (count >= currColNum) {
        count = 0;
      }
      points.push(i);
    }
  }
  return points;
};

const getColRemovePoints = (prevColNum, currColNum, gridLen) => {
  let count = 0;
  let points = [];
  for (let i = 0; i < gridLen; i++) {
    count++;
    if (count > currColNum) {
      if (count >= prevColNum) {
        count = 0;
      }
      points.push(i);
    }
  }
  return points;
};

const Sponsors = ({sponsorsList, onChange, isLoading}) => {
  const [row, setRow] = useState({prevVal: 1, currVal: 1});
  const [col, setCol] = useState({prevVal: 3, currVal: 3});
  const [fileData, setFileData] = useState({
    prevState: Array(row.currVal * col.currVal).fill({}).map((_, i) => ({id: i})),
    currState: Array(row.currVal * col.currVal).fill({}).map((_, i) => ({id: i}))
  });
  const [currImg, setCurrImg] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
    aspect: 16 / 9,
    keepSelection: true,
  });
  // const pixelRatio = 4;


  const [isModalVisible, setModalVisible] = useState(false);
  const isFirstRun = useRef(true);
  // const imgRef = useRef(null);
  // if (sponsorsList.fileData) {
  //   setRow(sponsorsList.row);
  //   setCol(sponsorsList.col);
  //   setFileData(sponsorsList.fileData);
  // }
  useEffect(() => {
    // Check weather fileData empty
    if (sponsorsList.fileData) {
      setRow(sponsorsList.row);
      setCol(sponsorsList.col);
      setFileData(sponsorsList.fileData);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    onChange({row, col, fileData});
  }, [fileData]);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const currListLength = row.currVal * col.currVal;
    let gridArray = [];
    if (fileData.currState.length < currListLength) {
      if (col.currVal > col.prevVal) {
        const points = getColInsertPoints(col.prevVal, col.currVal, currListLength);
        let shift = 0;
        for (let i = 0; i < currListLength; i++) {
          if (points.includes(i)) {
            gridArray.push({id: i});
            shift++;
          } else {
            gridArray.push({...fileData.currState[i - shift], id: i})
          }
        }
        setFileData({
          currState: gridArray,
          prevState: fileData.currState,
        })
      }
      if (row.currVal > row.prevVal) {
        setFileData({
          currState: [...fileData.currState, ...Array(currListLength - fileData.currState.length).fill({})],
          prevState: fileData.currState,
        })
      }
    }
    if (fileData.currState.length > currListLength) {
      const prevLength = row.prevVal * col.prevVal;
      if (col.currVal < col.prevVal) {
        const points = getColRemovePoints(col.prevVal, col.currVal, prevLength);
        let shift = 0;
        for (let i = 0; i < currListLength; i++) {
          if (points.includes(i)) {
            shift++;
          }
          gridArray.push({...fileData.currState[i + shift], id: i});
        }
        setFileData({
          currState: gridArray,
          prevState: fileData.currState,
        });
      }
      if (row.currVal < row.prevVal) {
        setFileData({
          currState: fileData.prevState.slice(0, currListLength),
          prevState: fileData.currState,
        })
      }
    }

  }, [row, col]);
  // const onRemove = a
  const props = () => {
    return {
      name: 'files',
      multiple: false,
      accept: "image/*",
      action: '/api/upload',
      // fileList:{fileList},
      headers: {
        Authorization: `Bearer ${token.get()}`,
      },
      // async onChange(info) {
      //   const {status} = info.file;
      //
      //   if (status === 'uploading') {
      //   }
      //   if (status === 'done') {
      //     message.success(`${info.file.name} file uploaded successfully.`);
      //     const imageUrl = `/api${info.file.response[0].url}`;
      //     // setCurrImg()
      //     setFileData({
      //       prevState: fileData.currState,
      //       currState: fileData.currState.map((val, i) => {
      //         if (i === id) {
      //           return {...val, imageComp: imageUrl}
      //         }
      //         return val
      //       })
      //     });
      //
      //   } else if (status === 'error') {
      //     message.error(`${info.file.name} file upload failed.`);
      //   }
      // },
      async beforeUpload(file) {
        setCurrImg(await getBase64(file));
        setModalVisible(true);
        return false
      }
      // onRemove:
    }
  };
  // const uploadOnChange = ({info, id}) => {
  //   const {status} = info.file;
  //   // if (status === 'uploading') {}
  //   console.log(status);
  //   if (status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //     const imageUrl = `${window.location.hostname}/api/${info.file.response[0].url}`;
  //     setFileData({
  //       prevState: fileData.currState,
  //       currState: fileData.currState.map((val, i) => {
  //         if (val.id === id) {
  //           return {...val, imageComp: <img src={imageUrl} alt="sponsor" style={{width: '100%'}}/>}
  //         }
  //         return val
  //       })
  //     })
  //   } else if (status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }
  // const onDragEnd = (sourceId, sourceIndex, targetIndex, targetId) => {
  //   // if (!result.destination) {
  //   //   return;
  //   // }
  //   //
  //   // if (result.destination.index === result.source.index) {
  //   //   return;
  //   // }
  //   const movedArray = arrayMove(fileData.currState, sourceIndex, targetIndex);
  //   setFileData({
  //     prevState: fileData.currState,
  //     currState: movedArray
  //   })
  // };
  // const DraggableContainer = SortableContainer(({children}) => children);
  //
  // const DraggableItem = SortableElement(({item, indexPos}) => {
  //     return (
  //       <Draggable draggableId={indexPos} index={indexPos}>
  //         {provided => (
  //           <div ref={provided.innerRef}
  //                {...provided.draggableProps}
  //                {...provided.dragHandleProps}>
  //             <List.Item>
  //               {item.imageComp ? item.imageComp
  //                 : <Dragger name='files' multiple={false} accept="image/*" action='/api/upload'
  //                            headers={{Authorization: `Bearer ${token.get()}`}}
  //                            onChange={info => uploadOnChange(info, indexPos)} style={{width: "100%"}}>
  //                   <p className="ant-upload-drag-icon">
  //                     <InboxOutlined/>
  //                   </p>
  //                   <p className="ant-upload-text">点击或者拖入赞助商Logo</p>
  //                   <p className="ant-upload-hint">
  //                     支持单个图片上传
  //                   </p>
  //                 </Dragger>
  //               }
  //             </List.Item>
  //           </div>
  //         )}
  //       </Draggable>
  //     )
  //   }
  // );
  return (
    <div className={styles.container}>
      <Title level={3}>赞助商</Title>
      创建
      <InputNumber size="small" style={{width: "50px"}} min={1} defaultValue={row.currVal} value={row.currVal}
                   onChange={val => setRow({prevVal: row.currVal, currVal: val})}/>
      x
      <InputNumber size="small" style={{width: "50px"}} min={1} max={5} defaultValue={col.currVal} value={col.currVal}
                   onChange={val => setCol({prevVal: col.currVal, currVal: val})}/>赞助商宫格
      <List
        style={{paddingTop: "20px"}}
        grid={{gutter: 16, column: col.currVal, lg: col.currVal}}
        dataSource={fileData.currState} renderItem={(item, index) => (
        <List.Item className={item.imageComp ? styles.uploadedImg : null}>
          {item.imageComp ?
            <>
              <img src={item.imageComp} alt="sponsor" style={{width: '100%', height: "100%"}}/>
              <DeleteOutlined style={{fontSize: 32}} className={styles.uploadedImgIcon}/>
            </>
            : <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined/>
              </p>
              <p className="ant-upload-text">点击或者拖入赞助商Logo</p>
              <p className="ant-upload-hint">
                支持单个图片上传
              </p>
            </Dragger>
          }
        </List.Item>
      )}
      >
      </List>
      <Modal
        title="裁剪上传"
        visible={isModalVisible}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        // onCancel={this.handleCancel}
      >
        <ReactCrop
          src={currImg}
          crop={crop}
          onChange={c => setCrop(c)}
          onComplete={c => setCompletedCrop(c)}
        >
        </ReactCrop>
      </Modal>
    </div>
  );
};
export default Sponsors;
