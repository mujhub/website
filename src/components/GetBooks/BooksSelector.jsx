import React, { useState } from "react";

import { H6, Type } from "../../styles/Shared/StyledTypes";
import { Item, ItemContainer, FormSection, PriceSection } from "../../styles/components/BookStyles";
import { Divider } from "../../styles/components/HomeStyles";

const BooksSelector = ({ booksData, handleBookSelect, isPackSelected, additionalBooks, handleAdditionalBooksChange, booksPrice }) => {
	const [additionalTick, setAdditionalTick] = useState(false);
	return (
		<>
			<H6>Books</H6>
			<Type>
				Choose from a variety of books curated as a pack by the book provider based on your study cycle. Once you're done with using the books for the
				semester, return the books and receive a partial refund as stated below.
			</Type>
			<ItemContainer isPackSelected={isPackSelected}>
				{booksData.map(
					(data, i) =>
						data.isPack && (
							<Item
								selected={data.selected}
								key={data.id}
								onClick={() => {
									handleBookSelect(i);
								}}>
								<p>Name: {data.name}</p>
								<p>Author: {data.description}</p>

								{!isPackSelected && (
									<p>
										{`Price: ₹ ${data.price[0]}`}
										{data.price[0] !== data.price[1] ? ` to ₹ ${data.price[1]}` : null}
									</p>
								)}
							</Item>
						)
				)}
			</ItemContainer>
			<ItemContainer>
				{booksData.map(
					(data, i) =>
						!data.isPack && (
							<Item
								key={data.id}
								selected={data.selected}
								onClick={() => {
									handleBookSelect(i);
								}}>
								<p>Name: {data.name}</p>
								<p>Author: {data.description}</p>
								<p>
									{`Price: ₹ ${data.price[0]}`}
									{data.price[0] !== data.price[1] ? ` to ₹ ${data.price[1]}` : null}
								</p>
							</Item>
						)
				)}
			</ItemContainer>
			<PriceSection>
				{isPackSelected ? (
					<>
						<Divider />
						<Type style={{ textAlign: "-webkit-right" }}>
							Pack Price: ₹ {booksPrice[0]}
							{booksPrice[0] !== booksPrice[1] ? ` - ₹ ${booksPrice[1]}` : null}
						</Type>
						<Type style={{ textAlign: "-webkit-right" }}>
							Refund: - ₹ 1000
							{booksPrice[0] !== booksPrice[1] ? ` - ₹ ${booksPrice[1]}` : null}
						</Type>
						<Type style={{ textAlign: "-webkit-right" }}>
							Effective Books Price: ₹ {booksPrice[0] - 1000}
							{booksPrice[0] !== booksPrice[1] ? ` to ₹ ${booksPrice[1] - 1000}` : null}
						</Type>
					</>
				) : (
					<Type style={{ textAlign: "-webkit-right" }}>
						Total Books Price: ₹ {booksPrice[0]}
						{booksPrice[0] !== booksPrice[1] ? ` to ₹ ${booksPrice[1]}` : null}
					</Type>
				)}
			</PriceSection>
			<FormSection>
				<div style={{ marginTop: "1rem", display: "flex", flexDirection: "row", alignItems: "center" }}>
					<label htmlFor='additional'>
						<input
							id='additional'
							style={{ minWidth: 10 }}
							type='checkbox'
							checked={additionalTick}
							onChange={(e) => {
								setAdditionalTick(e.target.checked);
							}}
						/>
						I would like to inquire about other books too
					</label>
				</div>
				{additionalTick && (
					<div>
						<label className='additionalBooksLable'>State the name and author of the book:</label>
						<textarea
							rows='5'
							cols='100'
							style={{ display: "flex" }}
							name='menu'
							placeholder='Ex: Engineering Mathematics - Rammanna'
							value={additionalBooks}
							onChange={handleAdditionalBooksChange}
						/>
					</div>
				)}
			</FormSection>
		</>
	);
};

export default BooksSelector;
