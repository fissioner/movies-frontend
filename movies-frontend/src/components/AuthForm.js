import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import { BrowserRouter as  Link, useHistory } from "react-router-dom";
import axios from 'axios';


const AuthForm = () => {
    const { form } = useParams();
    const history = useHistory();
    const form_type = form === 'register' ? 'Sign Up' : 'Log In';
    const isRegister = form === 'register' ? true : false;

    function persistToken(token) {
        window.localStorage.setItem('token', token);
        history.push('/movies/');
        console.log('Persisted token? ', token)
    }

    function getToken(username, password) {
        console.log(password, username)
        axios.post(
            `http://54.221.172.184:8000/api-token-auth/`, {
            password: password,
            username: username,
        }
        ).then(res => persistToken(res.data.token)
        ).catch(error => {
            console.log(error)
        });
    }
    const onFinish = values => {
        let { password, username } = values;
        if (isRegister) {
            axios.post(
                `http://54.221.172.184:8000/users/`, {
                password: password,
                username: username,
            }
            ).then(() => getToken(username, password)
            ).catch(error => {
                console.log(error)
            });
        }
        else { getToken(username, password) }
    };

    return (
        <>
            <h1>{form_type}</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input style={{ width: '300px' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        style={{ width: '300px' }}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {isRegister ? '' : <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>}

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">{form_type}</Button>
                    {isRegister ? '' : <>&nbsp;or <Link to='/auth/register'>sign up!</Link></>}
                </Form.Item>
            </Form>
        </>
    );
};

export default AuthForm;