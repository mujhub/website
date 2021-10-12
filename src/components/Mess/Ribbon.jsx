import React from "react";
import { useAuth } from "../../contexts/Auth";
import { auth } from "../../services/firebase";

// styles
import { RibbonStyle } from "../../styles/components/MessStyles";
import { Type } from "../../styles/Shared/StyledTypes";

const Ribbon = ({eatery}) => {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <RibbonStyle>
      {eatery ? `Hello, ${eatery}` : `Hello, ${currentUser.email}` }
      <Type onClick={handleLogout}>
        <u>LOGOUT</u>
      </Type>
    </RibbonStyle>
  );
};

export default Ribbon;
