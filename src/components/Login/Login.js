import './Login.css'
import React, {useState} from "react";
import { Helmet } from 'react-helmet';
import { Form, Input, Button, Checkbox } from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons'



const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const onSubmit = () => {
    console.log("Submitted");
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
  <div>
    <Helmet>
    <title>Login</title>
  </Helmet>
    <Form className="login-form" onFinish={onSubmit}  onFinishFailed={onSubmitFailed} autoComplete="off">
      <h1 className="form-title">Login</h1>
      {/* Username */}
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Username required' }]}
      >
        <Input
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} 
          type="username"
          placeholder="Username"
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
          value={formData.username} 
        />
      </Form.Item>
      {/* Password */}
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Password required' }]}
      >
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} 
          type="password"
          placeholder="Password"
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          value={formData.password} 
        />
      </Form.Item>
      <Form.Item>
      <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
        </Button>
        <div>New Here? <a href="">Sign Up</a></div>
      </Form.Item>
    </Form>
  </div>
  )
}

export default Login