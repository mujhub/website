import React from "react";
import { ModalContainer } from "../../styles/components/BookStyles";
import { Type, H6 } from "../../styles/Shared/StyledTypes";
import { Divider } from "../../styles/components/HomeStyles";

import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import LOGO from "../../images/logoSq256.png";
import { Button } from "../../styles/Shared/Button";

const Modal = ({ show, hide, data }) => {
	const { name, phone, booksData, additionalBooks, stationeryData, booksPrice, stationeryPrice } = data;
	const total_min = Number(booksPrice[0]) + Number(stationeryPrice);
	const total_max = Number(booksPrice[1]) + Number(stationeryPrice);
	return (
		<ModalContainer show={show}>
			<div className='content'>
				<div className='logo'>
					<div>
						<img src={LOGO} alt='MUJ HUB' />
					</div>
					<button>
						<FiDownload style={{ marginRight: "0.5rem" }} size='18px' />
						DOWNLOAD
					</button>
					<button style={{ background: "#EB5757", color: "white" }} onClick={() => hide(false)}>
						<IoClose size='18px' />
					</button>
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
										<td>{book.name}</td>
									</tr>
								) : null
							)}
							<tr>
								<td> Additional: {additionalBooks}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='products'>
					<div>
						<Type style={{ fontWeight: 600 }}>Stationery</Type>
						<Type style={{ fontWeight: 600 }}>Total Stationery Price: ₹ {stationeryPrice}</Type>
					</div>
					{stationeryData.map((item, i) => (item.selected ? (i < stationeryData.length - 1 ? `${item.name}, ` : `${item.name}`) : null))}
				</div>
				<Divider />
				<Type style={{ fontWeight: 600 }}>Total Price: ₹ {total_min === total_max ? total_max : `${total_min} to ₹ ${total_max}`}</Type>
			</div>
		</ModalContainer>
	);
};

export default Modal;
