import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;

class UpdateForm extends Component {
  static defaultProps = {
    handleUpdate: () => {},
    handleUpdateModalVisible: () => {},
    values: {},
  };

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        name: props.values.name,
        department: props.values.department,
        position: props.values.position,
        email: props.values.email,
      },
      positionOption: props.positionOption,
      intl: props.intl,
      // currentStep: 0,
    };
  }

  handleNext = () => {
    const { form, onSubmit: handleUpdate } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleUpdate(formVals);
        },
      );
    });
  };

  // backward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep - 1,
  //   });
  // };
  //
  // forward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep + 1,
  //   });
  // };

  renderContent = formVals => {
    const { form } = this.props;
    const { intl } = this.state;
    return [
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
        })(<Input defaultValue={formVals.name} value={formVals.name} placeholder="请输入姓名" />)}
      </FormItem>,
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
        })(<Input defaultValue={formVals.email} value={formVals.email} placeholder="请输入邮箱" />)}
      </FormItem>,
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
        <Select
          value={
            formVals.department !== null
              ? intl.formatMessage({ id: `roster.department.${formVals.department}` })
              : null
          }
          style={{ width: '100%' }}
        >
          {this.state.positionOption.department.map(d => (
            <Option key={d}>
              {intl.formatMessage({ id: `roster.department.${d.toString()}` })}
            </Option>
          ))}
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
      >
        {form.getFieldDecorator('position', {
          rules: [{ type: 'array', required: true, message: '请选择职位!' }],
        })}
        <Select
          value={intl.formatMessage({ id: `roster.position.${formVals.position}` })}
          style={{ width: '100%' }}
        >
          {this.state.positionOption.position.map(d => (
            <Option key={d}>{intl.formatMessage({ id: `roster.position.${d.toString()}` })}</Option>
          ))}
        </Select>
      </FormItem>,
    ];
  };

  renderFooter = () => {
    const { onCancel: handleUpdateModalVisible, values } = this.props;

    return [
      <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
        取消
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleNext()}>
        完成
      </Button>,
    ];
  };

  render() {
    const { updateModalVisible, onCancel: handleUpdateModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        bodyStyle={{
          padding: '32px 40px 48px',
        }}
        destroyOnClose
        title="更改成员信息"
        visible={updateModalVisible}
        footer={this.renderFooter()}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        <h4 style={{ textAlign: 'center' }}>基本信息</h4>
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

export default Form.create()(injectIntl(UpdateForm));
