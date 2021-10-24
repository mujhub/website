import React, { useState, useEffect } from "react";
import { Button, Tooltip, Select } from "antd";
import { FiEdit3 } from "react-icons/fi";

import EditDetailsModal from "./EditDetailsModal/index";
import OrderCard from "./OrderCard";

import {
  getEateryMetaData,
  getOrdersByShopID,
} from "../../services/eateries.services";

import { Container } from "../../styles/components/EateriesStyles";

const EateriesDashboard = () => {
  const [eateryMetaData, setEateryMetaData] = useState({});
  const [orders, setOrders] = useState({});
  const [editDetailsModal, setEditDetailsModal] = useState(false);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    setEateryMetaData(getEateryMetaData);
    setOrders(getOrdersByShopID);
  }, []);
  return (
    <Container className="mx-6 lg:mx-20 my-5 text-center flex items-center flex-col gap-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{eateryMetaData.title}</h2>
        <Tooltip title="Edit Details">
          <Button
            className="flex items-center justify-center rounded-md"
            onClick={() => setEditDetailsModal(true)}
            icon={<FiEdit3 size="14" />}
          />
        </Tooltip>
      </div>
      <p>{eateryMetaData.description}</p>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p>Location: {eateryMetaData.location}</p>
          <p>Opens At: {eateryMetaData.opens_at}</p>
        </div>
        <div>
          <p> Phone no.: {eateryMetaData.contact}</p>
          <p>Closes At: {eateryMetaData.closes_at}</p>
        </div>
      </div>
      <hr />
      <Select
        defaultValue="PENDING"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <Select.Option value="PENDING">New Orders</Select.Option>
        <Select.Option value="INPROGRESS">Progress</Select.Option>
        <Select.Option value="COMPLETED">Completed</Select.Option>
      </Select>
      <div className="grid gap-4 grid-cols-3">
        {Object.entries(orders).map(([key, order]) => (
          <OrderCard key={key} orderDetails={order} />
        ))}
      </div>
      <EditDetailsModal
        outletDetails={eateryMetaData}
        setEditDetailsModal={setEditDetailsModal}
        isModalVisible={editDetailsModal}
      />
    </Container>
  );
};

export default EateriesDashboard;
