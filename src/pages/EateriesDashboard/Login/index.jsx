import React, { useState } from "react";
import {Redirect} from "react-router-dom";

// components
import { Form, Input, Button } from "antd";
import { Container } from "../../../styles/components/EateriesStyles";

// business logic
import { useForm } from "./Login.bl";
import { useAuth } from "../../../contexts/Auth";

const EateriesLogin = () => {
  const {currentUser } = useAuth();
  const [formRef, isOtpSent, helpers] = useForm();
  const { onSubmit, onReset, sendOtp, onSubmitError,grabOtp,grabPhone } = helpers;
  // const [phone,setPhone] = useState("")
  
  return (
    <Container className="flex justify-center items-center gap-6 flex-col m-auto">
      <h2 className="text-xl font-semibold text-left">Eateries Login</h2>
      {currentUser ? <Redirect to="/eateries" /> : null}
      <Form
        ref={formRef}
        layout="vertical"
        onFinish={onSubmit}
        onFinishFailed={onSubmitError}
        >
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
          >

          <Input
            prefix={<p className="text-gray-500">+91</p>}
            disabled={isOtpSent}
            placeholder="987654321"
          />
        </Form.Item>

        <div id="sign-in-button" />

        {!isOtpSent && (
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="button" onClick={sendOtp}>
              Send OTP
            </Button>
          </Form.Item>
        )}

        {isOtpSent && (
          <>
            <Form.Item
              label="OTP"
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please input the One Time Password!",
                },
              ]}
            >
              <Input.Password placeholder="000000" onChange={(e) => grabOtp(e.target.value)}/>
            </Form.Item>

            <div className="flex gap-5">
              <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="ghost" htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form>
    </Container>
  );
};

export default EateriesLogin;
