import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';
import React, { Component } from 'react';

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
        title: props.values.title,
        score: props.values.score,
      },
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
        })(<Input placeholder="请输入姓名" />)}
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
        {form.getFieldDecorator('title', {
          rules: [
            {
              required: true,
              message: '请输入至少2个字符！',
              min: 2,
            },
          ],
        })(<Input placeholder="请输入职位" />)}
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

export default Form.create()(UpdateForm);
