import React, { useEffect, useState } from "react";
import Dashboard from "../components/Mess/Dashboard";

import { getMessMenu } from "../services/firestore";
import Ribbon from "../components/Mess/Ribbon";

const MessPanel = () => {
  const [currentMenuData, setCurrentMenuData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getMessMenu();
      if (!res) return;
      if (!res.exists) return;

      setCurrentMenuData(res.data());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Ribbon />
      {!isLoading ? (
        <Dashboard currentMenuData={currentMenuData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MessPanel;
