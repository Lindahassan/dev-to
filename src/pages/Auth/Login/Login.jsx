import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {useNavigate} from "react-router-dom";
import './Login.css';

 const Login = () => {
  const navigate = useNavigate();
   
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='log-form'>
      <h2>Login Form </h2>
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 8 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset:5, span: 8 }}>
        <Button onClick={()=>navigate("/")} type="primary" htmlType="submit">LogIn</Button>
      
      </Form.Item>
     
    </Form>
    <p className=' line'>
      Need an Account?<br/>
      <span>
        {navigate("/register ")}
        <a href='#'>Sign Up</a>
      </span>
    </p>
    </div>
   
  );
};
  export default Login ;
 