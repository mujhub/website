import React, { useState, useEffect } from "react";

import { Container as Flex } from "../styles/Shared/Container";
import { Type, H6 } from "../styles/Shared/StyledTypes";
import { Button } from "../styles/Shared/Button";
import { Divider } from "../styles/components/HomeStyles";
import { BookFormStyle, InputWrapper, FormSection, PriceSection } from "../styles/components/BookStyles";

import BooksSelector from "../components/GetBooks/BooksSelector";
import Header from "../components/GetBooks/Header";
import StationerySelector from "../components/GetBooks/StationerySelector";

import { getBookStoreData } from "../services/firestore";
import { uploadOrder } from "../services/storage";

const GetBooks = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [currentCycle, setCurrentCycle] = useState("p");
	const [isPackSelected, setIsPackSelected] = useState(true);
	const [booksPrice, setBooksPrice] = useState([0, 0]);
	const [stationeryPrice, setStationeryPrice] = useState(0);

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [physicsCycle, setPhysicsCycle] = useState([]);
	const [chemistryCycle, setChemistryCycle] = useState([]);
	const [booksData, setBooksData] = useState([]);
	const [additionalBooks, setAdditionalBooks] = useState("");
	const [stationeryData, setStationeryData] = useState([]);

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
	const handleStationerySelect = (i) => {
		let data = stationeryData;
		data[i].selected = !data[i].selected;
		setStationeryData([...data]);
	};

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const res = await getBookStoreData();
			if (!res) return;
			if (!res.exists) return;

			let data = res.data();
			if (data.physicsCycle) setPhysicsCycle([...data.physicsCycle]);
			if (data.chemistryCycle) setChemistryCycle([...data.chemistryCycle]);
			if (data.stationery) setStationeryData([...data.stationery]);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
		setCurrentCycle("p");
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setBooksData(currentCycle === "p" ? physicsCycle : chemistryCycle);
	}, [currentCycle, isLoading]);

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

		let price = !areSelectedInPack ? [0, 0] : [2000, 2000];
		booksData.forEach((book) => {
			if (book.selected)
				if (areSelectedInPack) {
					if (!book.isPack) {
						price[0] += book.price[0];
						price[1] += book.price[1];
					}
				} else {
					price[0] += book.price[0];
					price[1] += book.price[1];
				}
		});
		setBooksPrice(price);
	}, [booksData]);

	useEffect(() => {
		let price = 0;
		stationeryData.forEach((item) => {
			if (item.selected)
				if (typeof item.price === "object") price += item.price[1];
				else price += item.price;
		});
		setStationeryPrice(price);
	}, [stationeryData]);

	return (
		<Flex column p='1rem 10rem'>
			<Header />
			<Divider />
			<BookFormStyle>
				<FormSection>
					<H6>Current cycle</H6>
					<InputWrapper>
						<label>Select your cycle</label>
						<select id='cycle' onChange={handleCycleChange}>
							<optgroup label='First Year'>
								<option value='p'>Physics</option>
								<option value='c'>Chemistry</option>
							</optgroup>
						</select>
					</InputWrapper>
				</FormSection>
				<FormSection>
					<H6>Contact Details</H6>
					<InputWrapper>
						<label>Full Name</label>
						<input style={{ fontSize: "larger" }} placeholder='Full Name' name='name' onChange={handleNameChange} value={name} />
					</InputWrapper>
					<InputWrapper>
						<label>Phone Number</label>
						<input style={{ fontSize: "larger" }} placeholder='Phone Number' name='phone' onChange={handlePhoneChange} value={phone} />
					</InputWrapper>
				</FormSection>
				<Divider />

				<FormSection>
					<BooksSelector
						booksData={booksData}
						handleBookSelect={handleBookSelect}
						isPackSelected={isPackSelected}
						additionalBooks={additionalBooks}
						handleAdditionalBooksChange={handleAdditionalBooksChange}
						booksPrice={booksPrice}
					/>
				</FormSection>
				<Divider />
				<FormSection>
					<StationerySelector stationeryData={stationeryData} handleStationerySelect={handleStationerySelect} stationeryPrice={stationeryPrice} />
				</FormSection>

				<Divider />
				<FormSection>
					<PriceSection final>
						<Type style={{ textAlign: "-webkit-right", fontWeight: 700 }}>
							(Books + Stationery)
							<br />
							{`Grand Total:  ₹ ${booksPrice[0] + stationeryPrice}`}
							{booksPrice[0] !== booksPrice[1] ? ` to ₹ ${booksPrice[1] + stationeryPrice}` : null}
							<br />
						</Type>
						{isPackSelected && (
							<Type style={{ textAlign: "-webkit-right", fontWeight: 200 }}>
								Effective Grand Total <br /> ₹ {booksPrice[0] + stationeryPrice} - ₹ 1000
								<br /> ₹{booksPrice[0] + stationeryPrice - 1000}
							</Type>
						)}
						<Button
							onClick={() => {
								uploadOrder().on("state_changed", (snapshot) => {
									console.log(snapshot.bytesTransferred);
								});
							}}>
							CONTINUE
						</Button>
					</PriceSection>
				</FormSection>
			</BookFormStyle>
		</Flex>
	);
};

export default GetBooks;
