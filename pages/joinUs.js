import {Form, Input, Button, Checkbox, Radio, DatePicker, InputNumber, Typography, notification, Row, Col} from 'antd';

const tailLayout = {
    wrapperCol: {span: 24},
};
const {TextArea} = Input;
const {Title} = Typography;

const JoinUs = ({}) => {
    const [form] = Form.useForm();
    const onFinish = async values => {
        await form.validateFields();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/join-applications`, {
            method: "POST",
            body: JSON.stringify(values)
        });
        const response = await res.json();
        console.log(response);
        if (response.statusCode !== 200) {
            if (response.data[0].messages[0].message === "Email already taken.") {
                notification.error({message: "邮箱已存在."});
                return
            }
            notification.error({message: "未知错误, 请稍后再试."});
            return
        }
        // form.resetFields();
        notification.success({message: "提交成功! 请耐心等待回复."});
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="joinus">
            <div className="joinus-background-image"/>
            <div className="outter">
                <div style={{paddingTop: "3%", paddingBottom: "3%"}}>
                    <div className="joinusForm">
                        <span
                               style={{
                                   marginTop: "-15px",
                                   marginLeft: "2%",
                                   background: "white",
                                   color: "#3a0f87",
                                   display: "inline-block",
                                   fontSize: "24px",
                                   position: "absolute"
                               }}>
                            加入我们
                        </span>
                        <Form
                            form={form}
                            name="basic"
                            layout="vertical"
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            style={{paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%"}}
                        >
                            <Row gutter={32}>
                                <Col span={12}>
                                    <Form.Item
                                        // label="姓名"
                                        name="name"
                                        rules={[{required: true, message: '请输入名字'}]}
                                    >
                                        <Input placeholder="*姓名"/>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        // label="年龄"
                                        name="age"
                                        rules={[{required: true, message: '请输入年龄'}]}
                                    >
                                        <InputNumber min={1} max={100} placeholder="*年龄"/>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name="sex"
                                        rules={[{required: true, message: '请选择性别'}]}
                                    >
                                        <Radio.Group>
                                            <Radio value="male">男</Radio>
                                            <Radio value="female">女</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        // label="邮箱"
                                        name="email"
                                        rules={[{type: 'email', required: true, message: '请输入正确的邮箱'}]}
                                    >
                                        <Input placeholder="*邮箱"/>
                                    </Form.Item>
                                </Col>
                            </Row>


                            <Form.Item
                                wrapperCol={{ sm: 24 }}
                                // label="在读院校"
                                name="school"
                                rules={[{required: true, message: '请输入在读院校'}]}
                            >
                                <Input placeholder="*在读院校" />
                            </Form.Item>
                            <Row gutter={32}>
                                <Col span={12}>
                                    <Form.Item
                                        // label="学历水平"
                                        name="level"
                                        rules={[{required: true, message: '请输入学历水平'}]}
                                    >
                                        <Input placeholder="*学历水平"/>
                                    </Form.Item>

                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        // label="留学年限"
                                        name="studyYear"
                                        rules={[{required: true, message: '请输入留学年限'}]}
                                    >
                                        <InputNumber style={{width:"100%"}}  min={0} max={20} placeholder="*留学年限"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                // label="联系方式"
                                name="contact"
                                rules={[{required: true, message: '请输入联系方式'}]}
                            >
                                <TextArea placeholder="*联系方式 (微信，Email或电话号码)"/>
                            </Form.Item>
                            <Form.Item
                                label="期望加入的部门 （第一志愿）"
                                name="primaryInterest"
                                rules={[{required: true, message: '请输入期望加入的部门'}]}
                            >
                                <Radio.Group>
                                    <Radio value="活动策划部">活动策划部</Radio>
                                    <Radio value="新闻媒体部">新闻媒体部</Radio>
                                    <Radio value="网络技术部">网络技术部</Radio>
                                    <Radio value="外联公关部">外联公关部</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                label="期望加入的部门 （第二志愿）"
                                name="secondaryInterest"
                                rules={[{required: true, message: '请输入期望加入的部门'}]}
                            >
                                <Radio.Group>
                                    <Radio value="活动策划部">活动策划部</Radio>
                                    <Radio value="新闻媒体部">新闻媒体部</Radio>
                                    <Radio value="网络技术部">网络技术部</Radio>
                                    <Radio value="外联公关部">外联公关部</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                // label="加入学联的理由"
                                name="reason4Join"
                                rules={[{required: true, message: '请输入加入学联的理由'}]}
                            >
                                <TextArea rows={3} placeholder="*加入学联的理由"/>
                            </Form.Item>
                            <Form.Item
                                // label="爱好特长"
                                name="hobby"
                                rules={[{required: true, message: '请输入爱好特长'}]}
                            >
                                <Input placeholder="*爱好特长"/>
                            </Form.Item>
                            <Form.Item
                                // label="相关学生会经历"
                                name="experience"
                                rules={[{required: true, message: '请输入相关学生会经历'}]}
                            >
                                <TextArea rows={3} placeholder="*相关学生会经历"/>
                            </Form.Item>
                            <Form.Item
                                label="预约面试日期， 仅限开学后日期 (仅为意向， 不作为事件面试日期)"
                                name="interviewDate"
                                rules={[{required: true, message: '请输入预约面试日期'}]}
                            >
                                <DatePicker/>
                            </Form.Item>


                            <Form.Item >
                                <Button style={{width:"100px", height:"40px", fontWeight:800, float: "right", backgroundColor: "rgba(128, 0,128, 0.25)", color: "black", borderRadius: "5px"}} type="text"  htmlType="submit">
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};
// export async function getStaticProps() {
//     // const users = await fetch(`${process.env.NEXT_PUBLIC_API}/users`);
//     // const sponsors = await fetch(`${process.env.NEXT_PUBLIC_API}/sponsors`);
//     // const usersJson = await users.json();
//     // const sponsorsJson = await sponsors.json();
//     // return {
//     //     props: {
//     //         users: usersJson,
//     //         sponsors: JSON.parse(sponsorsJson.sponsorsList),
//     //     },
//     // };
// }

export default JoinUs
