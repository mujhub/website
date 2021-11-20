import Ribbon from "../../components/Mess/Ribbon";
import React, { useEffect,useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { getEateryDetails, getEateryOwner } from "../../services/firestore";
import { Button, Tooltip, Select } from "antd";
import { FiEdit3 } from "react-icons/fi";
import {db} from "../../services/firebase";

import EditDetailsModal from "./EditDetailsModal/index";
import OrderCard from "./OrderCard";

import { Container } from "../../styles/components/EateriesStyles";
import { saveEateryOwnerToken } from "../../services/push_notification";

const EateriesDashboard = () => {
  const {currentUser} = useAuth();
  const [eateryOwner,setEateryOwner] = useState("");
  const [eateryMetaData, setEateryMetaData] = useState({});
  const [orders, setOrders] = useState([]);
  const [editDetailsModal, setEditDetailsModal] = useState(false);
  const [statusOrders,setStatusOrders] = useState([]);

  const handleChange = value => {
    const tempArray = [];
    if(value === "PENDING"){
      let count = 0;
      for(let i=0;i<orders.length;i+=1){
        if(orders[i].data.status === "PLACED"){
          tempArray.push(orders[i]);
          count+=1;
        }
        if(count === 0){
          setStatusOrders([]);
        }
      }
      setStatusOrders(tempArray);
    }
    else if(value === "INPROGRESS"){ // Accepted
      for(let i=0;i<orders.length;i+=1) {
        let count = 0;
        console.log(orders,"orders inprogress");
        if(orders[i].data.status === "ACCEPTED"){
          count+=1;
          tempArray.push(orders[i]);
        }
        if(count === 0){
          setStatusOrders([]);
        }
      }
      setStatusOrders(tempArray);
    }
    else{ // Completed
      for(let i=0;i<orders.length;i+=1){
        let count = 0;
        if(orders[i].data.status === "COMPLETED"){
          tempArray.push(orders[i]);
          count+=1;
        }
        if(count === 0){
          setStatusOrders([]);
        }
      }
      setStatusOrders(tempArray);
    }
  };

  const getOwner = () => {
    getEateryOwner(currentUser.uid).then((res) => {
      setEateryOwner(res.data().slug);
      getEateryDetails(res.data().slug).then((eateryRes) => {
        setEateryMetaData(eateryRes.data().info);
      });
    });
  }

  useEffect(() => {
    // Save Eatery Owner Token to db
    saveEateryOwnerToken();

    // Get owner details
    getOwner();

    // Get orders in real time
    db.collection("owners").doc(currentUser.uid)
    .get().then((ownerDoc) => {
      db.collection("orders").where("shop","==",ownerDoc.data().slug)
      .onSnapshot((querySnapshot) => {
        const ordersData = [];
        querySnapshot.forEach((doc) => {
          ordersData.push({
            data:doc.data(),
            orderId:doc.id
          });
        })
        setOrders(ordersData);
      })
    })
  },[])

  return ( 
    <>
      <Ribbon eatery={eateryOwner} />
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
          <Select.Option value="INPROGRESS">ACCEPTED</Select.Option>
          <Select.Option value="COMPLETED">COMPLETED</Select.Option>
        </Select>
        <div className="grid gap-4 grid-cols-3">
          {statusOrders.map((order,key) => (
            <OrderCard uniquekey = {key} orderDetails={order} />
          ))}
        </div>
        <EditDetailsModal
          outletDetails={eateryMetaData}
          setEditDetailsModal={setEditDetailsModal}
          isModalVisible={editDetailsModal}
        />
      </Container>
    </> 
  )

};

export default EateriesDashboard;
