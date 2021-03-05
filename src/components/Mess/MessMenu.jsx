import React, { useEffect, useState } from "react";
import { MessMenu, Divider } from "../../styles/components/HomeStyles";
import { H6, Caption, Type } from "../../styles/Shared/StyledTypes";

import { getMessMenu } from "../../services/firestore";
import { COLOURS } from "../../constants/colours/colours";

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

			let data = res.data();
			if (data.meals) setMealData(data.meals);
			if (data.updatedAt) {
				let date = new Date(data.updatedAt.seconds * 1000);
				let updatedAt = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
				setUpdatedAtDate(updatedAt);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const EmptyData = () => <Type>No data available.</Type>;
	const EmptyMenu = () => <Type>Not yet updated.</Type>;
	const LoadingData = () => <Type>Loading...</Type>;
	const MealText = ({ meal }) => <Type>{meal.menu.map((item, i) => (i < meal.menu.length - 1 ? item + ", " : item))}</Type>;

	const renderMeal = (meal, i, total) => (
		<div key={i.toString()}>
			<H6>{meal.name}</H6>

			{meal.startsAt && meal.endsAt ? <Caption style={{ lineHeight: 0 }}>{`${meal.startsAt} - ${meal.endsAt}`}</Caption> : null}
			{meal.isSpecial ? <Caption style={{ color: COLOURS.YELLOW }}>Special Today</Caption> : null}

			{meal.menu ? meal.menu.length > 0 ? <MealText meal={meal} /> : <EmptyMenu /> : null}

			{i < total - 1 ? <Divider /> : null}
		</div>
	);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<MessMenu>
			<Caption>MESS MENU{updatedAtDate ? " - " + updatedAtDate : null}</Caption>
			{!isLoading ? mealData.length > 0 ? mealData.map((meal, i) => renderMeal(meal, i, mealData.length)) : <EmptyData /> : <LoadingData />}
		</MessMenu>
	);
};
