import React from "react";
import { Form, Input, TimePicker } from "antd";
import moment from "moment";
import Modal from "../../../components/Modal";

const EditDetailsModal = ({
  outletDetails,
  isModalVisible,
  setEditDetailsModal,
}) => {
  const format = "HH:mm";

  const onFinish = values => {
    console.log(values);
    setEditDetailsModal(false);
  };

  const handleCancel = () => {
    setEditDetailsModal(false);
  };

  return (
    <Modal
      handleCancel={() => setEditDetailsModal(false)}
      title="Edit Outlet Details"
      isModalVisible={isModalVisible}
    >
      <Form
        // eslint-disable-next-line react/jsx-props-no-spreading
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
      >
        <div className="flex gap-4">
          <Form.Item
            name="title"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input defaultValue={outletDetails.title} />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Phone No."
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input defaultValue={outletDetails.contact} />
          </Form.Item>
        </div>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={outletDetails.description} />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={outletDetails.location} />
        </Form.Item>
        <div className="flex gap-4 justify-between">
          <Form.Item name="opens_at" label="Opens At" className="flex-1">
            <TimePicker
              className="w-full"
              defaultValue={moment(outletDetails.opens_at, format)}
              format={format}
            />
          </Form.Item>
          <Form.Item name="closes_at" label="Closes At" className="flex-1">
            <TimePicker
              className="w-full"
              defaultValue={moment(outletDetails.closes_at, format)}
              format={format}
            />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default EditDetailsModal;
