import React from "react";

import { H6 } from "../../styles/Shared/StyledTypes";

import { COLOURS, GRAY } from "../../constants/colours/colours";

const BooksSelector = ({ booksData, handleBookSelect, isPackSelected, additionalBooks, handleAdditionalBooksChange }) => {
	return (
		<div>
			<H6>Books</H6>
			<div style={{ padding: 10, borderColor: "white", borderWidth: 3, borderStyle: "dashed", backgroundColor: isPackSelected ? "red" : null }}>
				{booksData.map(
					(data, i) =>
						data.isPack && (
							<div
								key={data.id}
								style={{ height: 75, width: 200, backgroundColor: data.selected ? COLOURS.GREEN1 : GRAY[500], margin: 5 }}
								onClick={() => {
									handleBookSelect(i);
								}}>
								Title: {data.name}
								<br />
								Author: {data.description}
								<br />
								{!isPackSelected && `Price: ${data.price}`}
								<br />
							</div>
						)
				)}
			</div>
			{booksData.map(
				(data, i) =>
					!data.isPack && (
						<div
							key={data.id}
							style={{ height: 75, width: 200, backgroundColor: data.selected ? COLOURS.GREEN1 : GRAY[500], margin: 5 }}
							onClick={() => {
								handleBookSelect(i);
							}}>
							Title: {data.name}
							<br />
							Author: {data.description}
							<br />
							Price: {data.price}
							<br />
						</div>
					)
			)}
			<br />
			<label>Additional Books (subject to availability)</label>
			<br />
			<textarea
				rows={5}
				cols={10}
				name='menu'
				placeholder='Ex: Engineering Mathematics - Rammanna'
				value={additionalBooks}
				onChange={handleAdditionalBooksChange}
			/>
			<br />
		</div>
	);
};

export default BooksSelector;
