import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal } from 'antd';
import React from 'react';

const FormItem = Form.Item;

const CreateForm = props => {
  const { modalVisible, form, onSubmit: handleAdd, onCancel } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd({ ...fieldsValue, score: 0 });
    });
  };

  return (
    <Modal
      destroyOnClose
      title="添加成员"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="姓名"
      >
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '请输入至少2个字符！',
              min: 2,
            },
          ],
        })(<Input placeholder="请输入姓名" />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="职位"
      >
        {form.getFieldDecorator('title', {
          rules: [
            {
              required: true,
              message: '请输入至少2个字符！',
              min: 2,
            },
          ],
        })(<Input placeholder="请输入职位" />)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
