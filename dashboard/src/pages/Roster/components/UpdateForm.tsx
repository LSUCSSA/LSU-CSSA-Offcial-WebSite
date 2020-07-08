import React, {useEffect, useState} from 'react';
import {Form, Button, DatePicker, Input, Modal, Radio, Select, Steps, Upload} from 'antd';
import {injectIntl} from 'react-intl';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import request from '@/utils/request';
import fetch from 'node-fetch';
import token from "@/utils/token";
import {TableListItem} from '../data.d';

const shortid = require('shortid');

export interface FormValueType extends Partial<TableListItem> {
  name?: string,
  email?: string,
  position?: string,
  department?: string,
  publicPhoto?: string,
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  positionOption: {
    position: Array<string>
    department: Array<string>
  };
  values: Partial<TableListItem>;
}

const FormItem = Form.Item;
const {Step} = Steps;
const {TextArea} = Input;
const {Option} = Select;
const RadioGroup = Radio.Group;

export interface UpdateFormState {
  formVals: FormValueType;
  currentStep: number;
}

const formLayout = {
  labelCol: {span: 7},
  wrapperCol: {span: 13},
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    name: props.values.name,
    email: props.values.email,
    position: props.values.position,
    department: props.values.department,
    publicPhoto: props.values.publicPhoto,
  });

  const [imageUrl, setImageUrl] = useState(`api/${props.values.publicPhoto}`);
  const [imageFile, setImageFile] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setImageUrl(`api/${props.values.publicPhoto}`)
  },[]);


  const [form] = Form.useForm();
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const handleSubmit = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({...formVals, ...fieldsValue});
    if(imageFile){
      const fileData = new FormData();
      fileData.append('files', imageFile);
      const res = await fetch('/api/upload', {
        method: "post",
        headers: {
          Authorization: `Bearer ${token.get()}`,
        },
        body: fileData
      });
      const data = await res.json();
      handleUpdate({...formVals, ...fieldsValue, publicPhoto: data[0].id});
    }else{
      handleUpdate({...formVals, ...fieldsValue, });
    }
  };



  const renderContent = () => {
    const {intl, positionOption} = props;
    return [
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="姓名"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入至少2个字符！',
            min: 2,
          },
        ]}
      >
        <Input placeholder="请输入姓名"/>
      </FormItem>,
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="邮箱"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'E-mail格式不正确',
          },
          {
            required: true,
            message: '请输入E-mail地址!',
          },
        ]}
      >
        <Input placeholder="请输入邮箱"/>
      </FormItem>,
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="部门"
        name="department"
        // rules={[{ type: 'array', required: true, message: '请选择部门!' }]}
      >
        <Select
          // defaultValue={
          //   formVals.department !== null
          //     ? intl.formatMessage({ id: `roster.department.${formVals.department}` })
          //     : null
          // }
          // onSelect={setDepartmentVal}
          style={{width: '100%'}}
        >
          {positionOption.department.map(d => {
            const dept = intl.formatMessage({id: `roster.department.${d.toString()}`});
            return (
              <Option key={shortid.generate()} value={d}>
                {dept}
              </Option>
            )
          })}
        </Select>
      </FormItem>,
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="职位"
        name="position"

        // rules={[{ type: 'array', required: true, message: '请选择职位!' }]}
      >
        <Select
          // defaultValue={intl.formatMessage({ id: `roster.position.${formVals.position}` })}
          style={{width: '100%'}}
          // onSelect={setPositionVal}
        >
          {positionOption.position.map(d => {
            const position = intl.formatMessage({id: `roster.position.${d.toString()}`});
            return (
              <Option key={shortid.generate()} value={d}>{position}</Option>
            )
          })}
        </Select>
      </FormItem>,
      formVals.department === "Presidents" || formVals.position === "chair" ? (
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="官网照片"
          name="publicPhoto"
        >
          <Upload
            name="files"
            listType="picture-card"
            multiple={false}
            accept="image/*"
            headers={{
              Authorization: `Bearer ${token.get()}`,
            }}
            beforeUpload={async (file)=> {
              setImageFile(file);
              const img = await getBase64(file);
              setImageUrl(img);
              return false;
            }}
            showUploadList={false}
            // action="api/upload"
            // onPreview={onPreview}
            // onChange={handleUploadChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/>
              :
              <div>
                {/*{loading ? <LoadingOutlined/> : <PlusOutlined/>}*/}
                <PlusOutlined/>
                <div className="ant-upload-text">Upload</div>
              </div>}
          </Upload>

        </FormItem>
      ) : null,
    ];
  };
  const renderFooter = () => {
    return (
      <FormItem>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
        <Button loading={props.isLoading} form="updateForm" key="submit" type="primary" htmlType='submit'>
          完成
        </Button>,
      </FormItem>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{padding: '32px 40px 48px'}}
      destroyOnClose
      title="更改成员信息"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Form
        id="updateForm"
        {...formLayout}
        form={form}
        initialValues={{
          name: formVals.name,
          email: formVals.email,
          position: formVals.position,
          department: formVals.department,
        }}
        onFinish={handleSubmit}
        onValuesChange={(_, allVal) => {
          form.setFieldsValue({...allVal, publicPhoto: allVal.publicPhoto.fileList})
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default injectIntl(UpdateForm);
