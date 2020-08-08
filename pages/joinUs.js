import {Form, Input, Button, Checkbox, Radio, DatePicker, InputNumber, Typography, notification} from 'antd';

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
        if(response.statusCode !== 200){
            if(response.data[0].messages[0].message === "Email already taken."){
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
        <>
            <Title level={2} style={{textAlign: "center"}}>
                加入我们
            </Title>
            <Form
                form={form}
                name="basic"
                layout="vertical"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{marginLeft: "30%", marginRight: "30%"}}
            >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: '请输入名字'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{type: 'email',required: true, message: '请输入正确的邮箱'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="性别"
                    name="sex"
                    rules={[{required: true, message: '请选择性别'}]}
                >
                    <Radio.Group>
                        <Radio value="male">男</Radio>
                        <Radio value="female">女</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[{required: true, message: '请输入年龄'}]}
                >
                    <InputNumber min={1} max={100}/>
                </Form.Item>
                <Form.Item
                    label="在读院校"
                    name="school"
                    rules={[{required: true, message: '请输入在读院校'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="学历水平"
                    name="level"
                    rules={[{required: true, message: '请输入学历水平'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="留学年限"
                    name="studyYear"
                    rules={[{required: true, message: '请输入留学年限'}]}
                >
                    <InputNumber min={0} max={20}/>
                </Form.Item>
                <Form.Item
                    label="联系方式"
                    name="contact"
                    rules={[{required: true, message: '请输入联系方式'}]}
                >
                    <TextArea placeholder="微信，Email或电话号码"/>
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
                    label="加入学联的理由"
                    name="reason4Join"
                    rules={[{required: true, message: '请输入加入学联的理由'}]}
                >
                    <TextArea rows={3}/>
                </Form.Item>
                <Form.Item
                    label="爱好特长"
                    name="hobby"
                    rules={[{required: true, message: '请输入爱好特长'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="相关学生会经历"
                    name="experience"
                    rules={[{required: true, message: '请输入相关学生会经历'}]}
                >
                    <TextArea rows={3}/>
                </Form.Item>
                <Form.Item
                    label="预约面试日期， 仅限开学后日期 (仅为意向， 不作为事件面试日期)"
                    name="interviewDate"
                    rules={[{required: true, message: '请输入预约面试日期'}]}
                >
                    <DatePicker/>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
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
