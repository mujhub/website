import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {firebaseUtil} from "../../../services/firebase";
import { message, Form } from "antd";

const isPhoneNumberValid = value => value.match(/\d/g).length === 10;

export const useForm = () => {
  const history = useHistory();
  const [formRef] = Form.useForm();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [final,setFinal] = useState("");
  const [otp,setOtp] = useState("");

  const grabOtp = (value) => {
    setOtp(value);
  }

  const onReset = () => {
    formRef.resetFields();
    setIsOtpSent(false);
  };

  const onSubmit = () => {

    // on success
    final.confirm(otp).then((result) => {
      message.success("Successful", 5);
      console.log("otp valid");
    }).catch((err) => {
      message.error("OTP is invalid", 5);
      formRef.current.setFieldsValue({
        otp: "",
      });
      console.log("otp invalid");
    })
  };

  // const auth = getAuth();

  const onSignInSubmit = () => {

    const phoneNumber = formRef.current.getFieldValue("phoneNumber");

    const appVerifier = new firebaseUtil.auth.RecaptchaVerifier("sign-in-button");

    firebaseUtil.auth().signInWithPhoneNumber(phoneNumber,appVerifier)
    .then((confirmationResult) => {
      setFinal(confirmationResult);
      console.log(confirmationResult,"result");
    }).catch((error) => {
      console.log(error);
    });
  }

  const sendOtp = () => {
    const phoneNumber = formRef.current.getFieldValue("phoneNumber");
    if (phoneNumber){
      onSignInSubmit();
      message.success(`OTP Sent to ${phoneNumber}`, 5);
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
    grabOtp,
    onSubmitError,
  };

  return [formRef, isOtpSent, helper];
};
