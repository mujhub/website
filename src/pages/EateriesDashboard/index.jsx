import React, { useEffect, useState } from "react";
import { Button, Tooltip, Select, Switch, Skeleton } from "antd";
import { FiEdit3 } from "react-icons/fi";

import { useAuth } from "../../contexts/Auth";

import { getEateryDetails, getEateryOwner } from "../../services/firestore";
import { db, auth } from "../../services/firebase";
import { saveEateryOwnerToken } from "../../services/push_notification";

import Ribbon from "../../components/Mess/Ribbon";

import EditDetailsModal from "./EditDetailsModal/index";
import OrderCard from "./OrderCard";

import { Container } from "../../styles/components/EateriesStyles";
import Axios from "axios";
import { API_URL } from "../../constants/urls";

const EateriesDashboard = () => {
  const { currentUser } = useAuth();
  const [eateryOwner, setEateryOwner] = useState("");
  const [eateryMetaData, setEateryMetaData] = useState({});
  const [orders, setOrders] = useState([]);
  const [editDetailsModal, setEditDetailsModal] = useState(false);
  const [statusOrders, setStatusOrders] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [isInfoLoading, setIsInfoLoading] = useState(false);
  const [isSwitchLoading, setIsSwitchLoading] = useState(false);

  const filterType = type => {
    const tempArray = [];
    let count = 0;
    for (let i = 0; i < orders.length; i += 1) {
      if (orders[i].data.status === type) {
        tempArray.push(orders[i]);
        count += 1;
      }
      if (count === 0) setStatusOrders([]);
    }
    setStatusOrders(tempArray);
  };

  const handleChange = type => {
    setFilterValue(type);
    filterType(type);
  };

  const getOwner = async () => {
    try {
      setIsInfoLoading(true);
      const owner = await getEateryOwner(currentUser.uid);
      const { slug } = await owner.data();
      setEateryOwner(slug);
      const eateryRes = await getEateryDetails(slug);
      const { info } = await eateryRes.data();
      setEateryMetaData(info);
      setIsInfoLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusUpdate = value => {
    setIsSwitchLoading(true);
    getEateryOwner(currentUser.uid)
      .then(response => {
        auth.currentUser.getIdToken().then(token => {
          Axios.post(
            `${API_URL}/eateries/updateStatus/${response.data().slug}`,
            {
              is_open: value,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          ).then(res => {
            console.log(res.data, "result");
          });
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsSwitchLoading(false);
      });
  };

  const createSnapshot = async () => {
    try {
      const ownersRef = db.collection("owners").doc(currentUser.uid);
      const ownersDoc = await ownersRef.get();
      const { slug } = ownersDoc.data();

      db.collection("orders")
        .where("shop", "==", slug)
        .onSnapshot(snap => {
          console.log("data updated");
          const ordersData = [];
          snap.forEach(doc => {
            ordersData.push({
              data: doc.data(),
              orderId: doc.id,
            });
          });
          setOrders(ordersData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Save Eatery Owner Token to db
    saveEateryOwnerToken();

    // Get owner details
    getOwner();

    // Realtime snapshot
    createSnapshot();
  }, []);

  useEffect(() => {
    handleChange(filterValue || "PLACED");
  }, [orders]);

  return (
    <>
      <Ribbon eatery={eateryOwner} />
      <Container className="mx-6 lg:mx-20 my-5 text-center flex items-center flex-col gap-4">
        {!isInfoLoading ? (
          <>
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
            <Switch
              onChange={handleStatusUpdate}
              checkedChildren="Open"
              unCheckedChildren="Close"
              loading={isSwitchLoading}
            />
            <hr />
            <Select
              defaultValue="PLACED"
              style={{ width: 200 }}
              onChange={handleChange}
            >
              <Select.Option value="PLACED">NEW ORDERS</Select.Option>
              <Select.Option value="ACCEPTED">ACCEPTED</Select.Option>
              <Select.Option value="COMPLETED">COMPLETED</Select.Option>
            </Select>
            <div className="grid gap-4 grid-cols-3">
              {statusOrders.map((order, key) => (
                <OrderCard uniquekey={key} orderDetails={order} />
              ))}
            </div>
            <EditDetailsModal
              outletDetails={eateryMetaData}
              setEditDetailsModal={setEditDetailsModal}
              isModalVisible={editDetailsModal}
            />
          </>
        ) : (
          <Skeleton active />
        )}
      </Container>
    </>
  );
};

export default EateriesDashboard;
