import React,{useState} from "react";
import { Form, Input, TimePicker } from "antd";
import moment from "moment";
import Modal from "../../../components/Modal";
import Axios from "axios"
import {auth} from "../../../services/firebase";
import { API_URL } from "../../../constants/urls";
import { getEateryOwner } from "../../../services/firestore";
import { useAuth } from "../../../contexts/Auth";

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

  const {currentUser} = useAuth();

  const [name,setName] = useState("");
  const [contact,setContact] = useState(null);
  const [description,setDescription] = useState("");
  const [location,setLocation] = useState("");
  const [openTime,setOpenTime] = useState("");
  const [closeTime,setCloseTime] = useState("");

  const updateDetails = () => {
    getEateryOwner(currentUser.uid).then((response) => {
      auth.currentUser.getIdToken().then((token) => {
        Axios.post(`${API_URL}/eateries/updateInfo/${response.data().slug}`,{
          contact,
          description,
          location,
          closes_at:closeTime,
          title:name,
          opens_at:openTime
        },{
          headers:{
            Authorization:"Bearer "+token
          }
        })
        .then((res) => {
          console.log(res.data,"result");
        }).catch((err) => {
          console.log(err);
        })
      })
    });

  }

  return (
    <Modal
      handleOk={updateDetails}
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
            <Input defaultValue={outletDetails.title} onChange={(e) => setName(e.target.value)}/>
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
            <Input defaultValue={outletDetails.contact} onChange={(e) => setContact(e.target.value)} />
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
          <Input defaultValue={outletDetails.description} onChange={(e) => setDescription(e.target.value)} />
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
          <Input defaultValue={outletDetails.location} onChange={(e) => setLocation(e.target.value)}/>
        </Form.Item>
        <div className="flex gap-4 justify-between">
          <Form.Item name="opens_at" label="Opens At" className="flex-1">
            <TimePicker
              className="w-full"
              onChange={(e) => setOpenTime(moment(e.target.value,format))}
              defaultValue={moment(outletDetails.opens_at, format)}
              format={format}
            />
          </Form.Item>
          <Form.Item name="closes_at" label="Closes At" className="flex-1">
            <TimePicker
              className="w-full"
              onChange={(e) => setCloseTime(moment(e.target.value,format))}
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
