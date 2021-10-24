import React from "react";
import { Modal as AntModal } from "antd";

const Modal = ({ title, isModalVisible, handleOk, handleCancel, children }) => (
  <AntModal
    centered
    title={title}
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    {children}
  </AntModal>
);

export default Modal;
