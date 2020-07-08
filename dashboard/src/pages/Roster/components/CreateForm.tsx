import React, {useState} from 'react';
import {Input, Modal, Select, Form, Button, message} from 'antd';
import {FormattedMessage} from 'react-intl';

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const FormItem = Form.Item;
const {Option} = Select;

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const {modalVisible, onSubmit: handleAdd, handleModalVisible, onCancel, positionOption} = props;
  const [form] = Form.useForm();
  const okHandle =  async() => {
    const isTouched = form.isFieldsTouched();
    if(!isTouched){
      return onCancel()
    }
    try{
      const fieldsValue =  await form.validateFields();
      handleAdd({...fieldsValue, score: 0});
      form.resetFields();
    }catch (e) {
      console.log(e)
    }
  };

  const renderFooter = () => {
    return (
      <FormItem>
        <Button form="createForm" type="secondary"  onClick={()=>okHandle()}>添加下一个</Button>
        <Button onClick={() => {
          onCancel();
          form.resetFields();
        }}>取消</Button>
        <Button form="createForm" key="submit" type="primary"  onClick={()=>okHandle()}>
          完成
        </Button>,
      </FormItem>
    );
  };
  return (
    <Modal
      destroyOnClose
      title="添加成员"
      visible={modalVisible}
      // onOk={okHandle}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form
        id="createForm"
        form={form}
        // initialValues={{
        //   name: '',
        //   email: '',
        //   position: '',
        //   department: '',
        // }}
        onFinish={()=>okHandle}
      >

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
        </FormItem>
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
          <Input placeholder="请输入姓名"/>
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="部门"
          name="department"
          rules={[{type: 'string', required: true, message: '请选择部门!'}]}
        >
          <Select style={{ width: '100%' }}>
            {positionOption.department.map(d => (
              <Option key={d}>{<FormattedMessage id={`roster.department.${d.toString()}`} />}</Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="职位"
          name="position"
          rules={[{type: 'string', required: true, message: '请选择职位!'}]}
        >
          <Select style={{ width: '100%' }}>
            {positionOption.position.map(d => (
              <Option key={d}>{<FormattedMessage id={`roster.position.${d.toString()}`} />}</Option>
            ))}
          </Select>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CreateForm;
