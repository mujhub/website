import Ribbon from "../../components/Mess/Ribbon";
import React, { useEffect,useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { getEateryOwner } from "../../services/firestore";

import { Container } from "../../styles/components/EateriesStyles";

const EateriesDashboard = () => {
  const {currentUser} = useAuth();
  console.log(currentUser.uid,"uid");

  const [eateryOwner,setEateryOwner] = useState("");

  useEffect(() => {
    const getOwner = async () => {
      const res = await getEateryOwner(currentUser.uid);
        setEateryOwner(res.data().slug);
    }
    getOwner();
  },[])

  return ( 
    <>
      <Ribbon eatery={eateryOwner} />
      <Container className="flex justify-center items-center">Dashboard</Container>
    </> 
  )
};

export default EateriesDashboard;
