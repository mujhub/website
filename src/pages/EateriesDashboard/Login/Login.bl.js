import { useState } from "react";
import { useHistory } from "react-router-dom";

import { message, Form } from "antd";

const isPhoneNumberValid = value => value.match(/\d/g).length === 10;
const isOtpValid = value => value.match(/\d/g).length === 6;

export const useForm = () => {
  const history = useHistory();
  const [formRef] = Form.useForm();
  const [isOtpSent, setIsOtpSent] = useState(false);

  const onReset = () => {
    formRef.resetFields();
    setIsOtpSent(false);
  };

  const onSubmit = ({ phoneNumber, otp }) => {
    // TODO: verify otp

    // on success
    if (isOtpValid(otp)) {
      message.success("Successful", 5);
      history.push("/eateries/dashboard");
    } else {
      message.error("OTP is invalid", 5);
      formRef.current.setFieldsValue({
        otp: "",
      });
    }
  };

  const sendOtp = () => {
    const phoneNumber = formRef.current.getFieldValue("phoneNumber");
    if (isPhoneNumberValid(phoneNumber)) {
      message.success(`OTP Sent to ${phoneNumber}`, 5);
      // TODO: otp service
      setIsOtpSent(true);
    } else message.error("Invalid Phone Number", 5);
  };

  const onSubmitError = errorInfo => {
    message.error("Failed to submit form, try again later", 5);
    console.log("Failed:", errorInfo);
  };

  const helper = {
    onSubmit,
    onReset,
    sendOtp,
    onSubmitError,
  };

  return [formRef, isOtpSent, helper];
};
