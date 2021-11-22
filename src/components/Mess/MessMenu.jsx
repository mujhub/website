import React, { useEffect, useState } from "react";

import { getMessMenu } from "../../services/firestore";

// styles
import { Divider } from "../../styles/components/HomeStyles";
import { H6, Caption, Type } from "../../styles/Shared/StyledTypes";
import {
  MessMenu,
  SpecialPill,
  Meal,
  MealContainer,
  MenuItem,
} from "../../styles/components/MessStyles";
import { countMessView } from "../../services/analytics-ua";

import { Banner } from "../Home/Banner";

export const MessMenuCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [updatedAtDate, setUpdatedAtDate] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getMessMenu();
      if (!res) return;
      if (!res.exists) return;

      const data = res.data();
      if (data.meals) setMealData(data.meals);
      if (data.updatedAt) {
        const date = new Date(data.updatedAt.seconds * 1000);
        const updatedAt = `${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`;
        setUpdatedAtDate(updatedAt);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const EmptyData = () => <Type className="my-3">No data available.</Type>;
  const EmptyMenu = () => <Type className="my-3">Not yet updated.</Type>;
  const LoadingData = () => <Type>Loading...</Type>;
  const MealText = ({ meal }) => (
    <MenuItem>
      {meal.menu.map((item, i) =>
        i < meal.menu.length - 1 ? `${item} + , ` : item
      )}
    </MenuItem>
  );

  const renderMeal = (meal, i, total) => (
    <div key={i.toString()}>
      <MealContainer>
        {/* all meals */}
        <Meal>
          <H6>{meal.name}</H6>
          {meal.startsAt && meal.endsAt ? (
            <Caption
              style={{ lineHeight: 0 }}
            >{`${meal.startsAt} - ${meal.endsAt}`}</Caption>
          ) : null}
        </Meal>

        {/* if the meal is special */}

        {meal.isSpecial ? (
          <SpecialPill>
            <Caption>SPECIAL MEAL</Caption>
          </SpecialPill>
        ) : null}
      </MealContainer>

      {meal.menu ? (
        meal.menu.length > 0 ? (
          <MealText meal={meal} />
        ) : (
          <EmptyMenu />
        )
      ) : null}

      {i < total - 1 ? <Divider /> : null}
    </div>
  );

  useEffect(() => {
    countMessView();
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Banner platform="mobile" />
      <MessMenu>
        <Caption>
          MESS MENU{updatedAtDate ? ` - ${updatedAtDate}` : null}
        </Caption>
        {!isLoading ? (
          mealData.length > 0 ? (
            mealData.map((meal, i) => renderMeal(meal, i, mealData.length))
          ) : (
            <EmptyData />
          )
        ) : (
          <LoadingData />
        )}
      </MessMenu>
    </div>
  );
};
