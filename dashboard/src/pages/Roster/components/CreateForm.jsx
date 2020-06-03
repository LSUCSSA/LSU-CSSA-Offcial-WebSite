import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const FormItem = Form.Item;
const { Option } = Select;

const CreateForm = props => {
  const { modalVisible, form, onSubmit: handleAdd, onCancel, positionOption } = props;
  console.log();
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
        label="邮箱"
      >
        {form.getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'E-mail格式不正确',
            },
            {
              required: true,
              message: '请输入E-mail地址!',
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
        label="部门"
      >
        {form.getFieldDecorator('department', {
          rules: [{ type: 'array', required: true, message: '请选择部门!' }],
        })}
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
      >
        {form.getFieldDecorator('position', {
          rules: [{ type: 'array', required: true, message: '请选择职位!' }],
        })}
        <Select style={{ width: '100%' }}>
          {positionOption.position.map(d => (
            <Option key={d}>{<FormattedMessage id={`roster.position.${d.toString()}`} />}</Option>
          ))}
        </Select>
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
