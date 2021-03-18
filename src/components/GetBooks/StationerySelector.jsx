import React from "react";
import { Type, H6 } from "../../styles/Shared/StyledTypes";
import { Item, ItemContainer, PriceSection } from "../../styles/components/BookStyles";
import { Divider } from "../../styles/components/HomeStyles";

const StationerySelector = ({ stationeryData, handleStationerySelect, stationeryPrice }) => {
	return (
		<div>
			<H6>Stationery</H6>
			<Type>
				Choose the stationery items based on your requirements. The pre-selected options are a pack curated by the stationery provider for the physics
				cycle labs. Feel free to de-select items that you do not need.
			</Type>
			<ItemContainer>
				{stationeryData.map((item, i) => (
					<Item
						selected={item.selected}
						key={item.id}
						onClick={(e) => {
							handleStationerySelect(i);
						}}>
						<p>
							Item: {item.name} <br /> Quantity: x {item.quantity}
						</p>
						{typeof item.price === "object" ? (
							<>
								<p style={{ textDecoration: "line-through", marginRight: 10 }}>MRP: ₹ {item.price[0]}</p>
								<p>Price: ₹ {item.price[1]}</p>
							</>
						) : (
							<p>₹ {item.price}</p>
						)}
					</Item>
				))}
			</ItemContainer>
			<Divider />
			<PriceSection>
				<Type style={{ textAlign: "-webkit-right" }}>{`Total Stationery Price: ₹ ${stationeryPrice}`}</Type>
			</PriceSection>
		</div>
	);
};

export default StationerySelector;
