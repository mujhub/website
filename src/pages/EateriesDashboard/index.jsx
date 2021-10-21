import Ribbon from "../../components/Mess/Ribbon";
import React, { useEffect,useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { getEateryOwner, getAllOrders } from "../../services/firestore";

import { Container } from "../../styles/components/EateriesStyles";
import { saveEateryOwnerToken } from "../../services/push_notification";

const EateriesDashboard = () => {
  const {currentUser} = useAuth();
  const [eateryOwner,setEateryOwner] = useState("");

  useEffect(() => {
    const getOwner = async () => {
      const res = await getEateryOwner(currentUser.uid);
        setEateryOwner(res.data().slug);
        localStorage.setItem("slug",res.data().slug);
    }
    getOwner();
    getAllOrders();
    saveEateryOwnerToken();
  },[])

  return ( 
    <>
      <Ribbon eatery={eateryOwner} />
      <Container className="flex justify-center items-center">Dashboard</Container>
    </> 
  )
};

export default EateriesDashboard;
