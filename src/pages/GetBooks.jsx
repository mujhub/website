import React, { useState, useEffect } from "react";

import { Container as Flex } from "../styles/Shared/Container";
import { Type, H4, H6 } from "../styles/Shared/StyledTypes";
import { Subheading, FormStyles } from "../styles/components/HomeStyles";
import { Button } from "../styles/Shared/Button";

import BooksSelector from "../components/GetBooks/BooksSelector";
import Header from "../components/GetBooks/Header";
import StationarySelector from "../components/GetBooks/StationarySelector";

const dummy_physicsData = [
	{
		id: "book1",
		imageSource: "",
		name: "Book 1",
		description: "Book 1 Desc",
		price: 45,
		selected: true,
		isPack: true,
	},
	{
		id: "book2",
		imageSource: "",
		name: "Book 2",
		description: "Book 2 Desc",
		price: 55,
		selected: true,
		isPack: true,
	},
	{
		id: "book3",
		imageSource: "",
		name: "Book 3",
		description: "Book 3 Desc",
		price: 120,
		selected: true,
		isPack: true,
	},
	{
		id: "book4",
		imageSource: "",
		name: "Book 4",
		description: "Book 4 Desc",
		price: 145,
		selected: false,
		isPack: false,
	},
];

const dummy_chemData = [
	{
		id: "book5",
		imageSource: "",
		name: "Book 5",
		description: "Book 5 Desc",
		price: 55,
		selected: true,
		isPack: true,
	},
	{
		id: "book6",
		imageSource: "",
		name: "Book 6",
		description: "Book 6 Desc",
		price: 45,
		selected: true,
		isPack: true,
	},
	{
		id: "book7",
		imageSource: "",
		name: "Book 7",
		description: "Book 7 Desc",
		price: 20,
		selected: true,
		isPack: true,
	},
	{
		id: "book8",
		imageSource: "",
		name: "Book 8",
		description: "Book 8 Desc",
		price: 45,
		selected: false,
		isPack: false,
	},
	{
		id: "book9",
		imageSource: "",
		name: "Book 9",
		description: "Book 9 Desc",
		price: 20,
		selected: false,
		isPack: false,
	},
];

const dummy_stationaryData = [
	{
		id: "drafter",
		name: "Omega Mini Drafter",
		imageSource: "",
		quantity: 1,
		price: [540, 390],
		selected: false,
	},
	{
		id: "sheet_holder",
		name: "Sheet Holder",
		imageSource: "",
		quantity: 1,
		price: [120, 90],
		selected: false,
	},
	{
		id: "drawing_sheets",
		name: "Drawing Sheets",
		imageSource: "",
		quantity: 7,
		price: [42, 35],
		selected: false,
	},
	{
		id: "apsara_pencils",
		name: "Apsara Drawing Pencils (H, 2H, 3H)",
		imageSource: "",
		quantity: 6,
		price: [36, 30],
		selected: false,
	},
	{
		id: "engineering_compass",
		name: "Engineering Compass",
		imageSource: "",
		quantity: 1,
		price: 25,
		selected: false,
	},
];

const GetBooks = () => {
	const [currentCycle, setCurrentCycle] = useState("p");
	const [isPackSelected, setIsPackSelected] = useState(true);
	const [booksPrice, setBooksPrice] = useState(0);
	const [stationaryPrice, setStationaryPrice] = useState(0);

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [booksData, setBooksData] = useState(dummy_physicsData);
	const [additionalBooks, setAdditionalBooks] = useState("");
	const [stationaryData, setStationaryData] = useState(dummy_stationaryData);

	const handleCycleChange = (e) => {
		setCurrentCycle(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};

	const handleBookSelect = (i) => {
		let data = booksData;
		data[i].selected = !data[i].selected;
		setBooksData([...data]);
	};

	const handleAdditionalBooksChange = (e) => {
		setAdditionalBooks(e.target.value);
	};
	const handleStationarySelect = (i) => {
		let data = stationaryData;
		data[i].selected = !data[i].selected;
		setStationaryData([...data]);
	};

	useEffect(() => {
		setBooksData(currentCycle === "p" ? dummy_physicsData : dummy_chemData);
	}, [currentCycle]);

	useEffect(() => {
		let areSelectedInPack = true;
		booksData.forEach((book) => {
			if (book.isPack) {
				if (!book.selected) {
					areSelectedInPack = false;
				}
			}
		});
		setIsPackSelected(areSelectedInPack);

		let price = 0;
		booksData.forEach((book) => {
			if (book.selected)
				if (areSelectedInPack) {
					price = 2000;
					if (!book.isPack) price += book.price;
				} else price += book.price;
		});
		setBooksPrice(price);
	}, [booksData]);

	useEffect(() => {
		let price = 0;
		stationaryData.forEach((item) => {
			if (item.selected)
				if (typeof item.price === "object") price += item.price[1];
				else price += item.price;
		});
		setStationaryPrice(price);
	}, [stationaryData]);

	return (
		<div>
			<Flex center column m='5rem 0 4rem 0'>
				<Header />
				<FormStyles>
					<H6>Current cycle</H6>
					<label>Select your cycle</label>
					<select id='cycle' onChange={handleCycleChange}>
						<optgroup label='First Year'>
							<option value='p'>Physics</option>
							<option value='c'>Chemistry</option>
						</optgroup>
					</select>
					<H6>Contact Details</H6>
					<label>Full Name</label>
					<input placeholder='Full Name' name='name' onChange={handleNameChange} value={name} />
					<br />
					<label>Phone Number</label>
					<input placeholder='Phone Number' name='phone' onChange={handlePhoneChange} value={phone} />
					<br />
					<BooksSelector
						booksData={booksData}
						handleBookSelect={handleBookSelect}
						isPackSelected={isPackSelected}
						additionalBooks={additionalBooks}
						handleAdditionalBooksChange={handleAdditionalBooksChange}
					/>
					{isPackSelected ? (
						<div>
							<div style={{ textDecoration: "line-through", marginRight: 10 }}>Total Price: {booksPrice}</div>Effective Price: {booksPrice - 1000}{" "}
						</div>
					) : (
						`Total Price: ${booksPrice}`
					)}
					{additionalBooks ? "*Excluding the prices of additional books" : null}
					<StationarySelector stationaryData={stationaryData} handleStationarySelect={handleStationarySelect} />
					{`Total Price: ${stationaryPrice}`}
					<br />
					{`Grand Total: ${stationaryPrice + booksPrice}`}
				</FormStyles>
			</Flex>
		</div>
	);
};

export default GetBooks;