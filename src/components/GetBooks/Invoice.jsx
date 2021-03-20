import React from "react";
import { Divider } from "../../styles/components/HomeStyles";
import { InvoiceContainer } from "../../styles/components/BookStyles";
import { Type, H6 } from "../../styles/Shared/StyledTypes";

import LOGO from "../../images/logoSq256.png";
import { COLOURS } from "../../constants/colours/colours";

const Invoice = ({ data, placeOrder, orderPlaced, error, isOrdering }) => {
	const { name, phone, booksData, additionalBooks, stationeryData, booksPrice, stationeryPrice } = data;
	const total_min = Number(booksPrice[0]) + Number(stationeryPrice);
	const total_max = Number(booksPrice[1]) + Number(stationeryPrice);

	return (
		<InvoiceContainer>
			<div className='content'>
				<div className='logo'>
					<img src={LOGO} alt='MUJ HUB' />
				</div>
				<H6>Books and Stationery Rentals</H6>
				<Divider />
				<div className='details'>
					<Type>Name: {name} </Type>
					<Type>Phone: {phone} </Type>
				</div>
				<Divider />
				<div className='products'>
					<div>
						<Type style={{ fontWeight: 600 }}>Books</Type>
						<Type style={{ fontWeight: 600 }}>
							Total Books Price: ₹ {booksPrice[0] === booksPrice[1] ? booksPrice[0] : `${booksPrice[0]} to ₹ ${booksPrice[1]}`}
						</Type>
					</div>
					<table>
						<tbody>
							{booksData.map((book, i) =>
								book.selected ? (
									<tr key={i}>
										<td>• {book.name}</td>
									</tr>
								) : null
							)}
							<tr>{data.additionalBooks && <td> Additional: {additionalBooks}</td>}</tr>
						</tbody>
					</table>
				</div>

				<div className='products' style={{ marginBottom: 30 }}>
					<div>
						<Type style={{ fontWeight: 600 }}>Stationery</Type>
						<Type style={{ fontWeight: 600 }}>Total Stationery Price: ₹ {stationeryPrice}</Type>
					</div>
					<table>
						<tbody>
							{stationeryData.map((item, i) =>
								item.selected ? (
									<tr key={i}>
										<td>• {item.name}</td>
									</tr>
								) : null
							)}
						</tbody>
					</table>
				</div>
				<Divider />
				<Type style={{ fontWeight: 600 }}>Total Price: ₹ {total_min === total_max ? total_max : `${total_min} to ₹ ${total_max}`}</Type>
				<Divider />
				{!error && !orderPlaced && (
					<div className='logo' style={{ display: "flex", justifyContent: "center", margin: 20 }}>
						<button disabled={isOrdering} style={{ backgroundColor: COLOURS.GREEN1, color: "white", padding: 15 }} onClick={placeOrder}>
							{isOrdering ? "Loading..." : "Place Order"}
						</button>
					</div>
				)}
			</div>
		</InvoiceContainer>
	);
};

export default Invoice;
