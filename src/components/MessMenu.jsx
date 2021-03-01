import React from "react";
import { MessMenu, Divider } from "../styles/components/HomeStyles";
import { H6, Caption, Type } from "../styles/Shared/StyledTypes";
// sample data

export const MessMenuCard = () => {
  let date = new Date();
  let dateNow = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  return (
    <MessMenu>
      <Caption>MESS MENU - {dateNow}</Caption>
      <div>
        <H6>Breakfast</H6>
        <Type>
          Bread, Butter, Dosa, Idli, Egg, Milk, Bread, Butte, rBread, Butter,
          Dosa, Idli, Egg, Milk, Bread, Butter,
        </Type>
        <Divider />
      </div>
      <div>
        <H6>Lunch</H6>
        <Type>Bread, Butter, Dosa, Idli, Egg, Milk, Bread, Butter</Type>
        <Divider />
      </div>
      <div>
        <H6>HiTea</H6>
        <Type>Bread, Butter,</Type>
        <Divider />
      </div>
      <div>
        <H6>Dinner</H6>
        <Type>Bread, Butter, Dosa, Idli, Egg, Milk, Bread, Butter, Dosa,</Type>
      </div>
    </MessMenu>
  );
};
