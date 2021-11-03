import React, { Component } from "react";
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from '../../utils/storageUtils'
import { Redirect } from "react-router";
export default class Login extends Component {

    render() {
        const user=memoryUtils.user
        if(user&&user._id)
        {
           return  <Redirect to='/admin'></Redirect>
        }
        const onFinish = async (values) => {
            const { username, password } = values
            const response = await reqLogin(username, password)
            if (response.status === 1) {
                message.success("登陆成功!")
                memoryUtils.user = response.data
                storageUtils.saveUser(memoryUtils.user)
                this.props.history.push("/admin")
            }
            else {
                message.error("登陆失败!")
            }
        };

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    min: 6,
                                    message: '用户名过短!',
                                },
                                {
                                    max: 20,
                                    message: '用户名过长!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" autoComplete="off" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    min: 6,
                                    message: '密码过短!',
                                },
                                {
                                    max: 20,
                                    message: '密码过长!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>

                    </Form>
                </section>
            </div>
        )
    }
}