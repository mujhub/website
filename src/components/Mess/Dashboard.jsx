import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import { setMessMenu } from "../../services/firestore";

const Dashboard = ({ currentMenuData }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [selectedMeal, setSelectedMeal] = useState(0);
	const [selectedMenu, setSelectedMenu] = useState();
	const [selectedSpecial, setSelectedSpecial] = useState(false);

	const menuToText = (arrayMenu) => {
		let textMenu = arrayMenu.toString();
		textMenu = textMenu.replace(/,/g, "\n");
		return textMenu;
	};

	const textToMenu = (textMenu) => {
		let arrayMenu = [];
		textMenu = textMenu.trim();
		arrayMenu = textMenu.split("\n");
		return arrayMenu;
	};

	const createMenu = () => {
		let updatedMenu = currentMenuData;
		updatedMenu.meals[selectedMeal].menu = textToMenu(selectedMenu);
		updatedMenu.meals[selectedMeal].isSpecial = selectedSpecial;
		return updatedMenu.meals;
	};

	const handleUpdate = async () => {
		setIsLoading(true);
		try {
			const res = await setMessMenu(createMenu());
			setMessage("Update Successful");
		} catch (error) {
			console.log(error);
			setMessage("Error Occurred");
		} finally {
			setIsLoading(false);
		}
	};

	const handleSelectChange = (e) => {
		let menuIndex = parseInt(e.target.value);
		setSelectedMeal(menuIndex);
		setSelectedMenu(menuToText(currentMenuData.meals[menuIndex].menu));
	};

	const handleMenuChange = (e) => {
		setSelectedMenu(e.target.value);
	};

	const handleSpecialChange = (e) => {
		setSelectedSpecial(e.target.checked);
	};

	const renderForm = () => {
		if (!currentMenuData) return <div>No data.</div>;
		if (currentMenuData.meals && typeof currentMenuData.meals === "object")
			return (
				<div>
					<select id='meal' onChange={handleSelectChange}>
						{currentMenuData.meals.map((meal, i) => (
							<option key={i.toString()} value={i}>
								{meal.name}
							</option>
						))}
					</select>
					<br />
					<textarea rows='20' cols='30' name='menu' value={selectedMenu} onChange={handleMenuChange} />
					<br />
					<input type='checkbox' defaultChecked={selectedSpecial} onChange={handleSpecialChange} />
					<label>Is Special?</label>
					<br />
					<button onClick={handleUpdate}>Update</button>
				</div>
			);
		else return <div>No meals available.</div>;
	};

	useEffect(() => {
		setTimeout(() => {
			if (message) setMessage("");
		}, 5000);
	}, [message]);

	useEffect(() => {
		if (currentMenuData.meals) setSelectedMenu(menuToText(currentMenuData.meals[0].menu));
	}, [currentMenuData]);

	return (
		<div>
			{renderForm()}
			{message ? message : null}
		</div>
	);
};

export default Dashboard;
