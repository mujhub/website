import React from "react";
import { Type, H4, H6 } from "../../styles/Shared/StyledTypes";
import { COLOURS, GRAY } from "../../constants/colours/colours";

const StationarySelector = ({ stationaryData, handleStationarySelect }) => {
	return (
		<div>
			<H6>Stationary</H6>
			<label>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
			<br />
			{stationaryData.map((item, i) => (
				<div
					key={item.id}
					style={{ height: 100, width: 200, backgroundColor: item.selected ? COLOURS.GREEN1 : GRAY[500], margin: 5 }}
					onClick={(e) => {
						handleStationarySelect(i);
					}}>
					{item.name}
					<br />x {item.quantity}
					{typeof item.price === "object" ? (
						<>
							<div style={{ textDecoration: "line-through", marginRight: 10 }}>Rs.{item.price[0]}</div>
							<div>Rs.{item.price[1]}</div>
						</>
					) : (
						<div>Rs.{item.price}</div>
					)}
				</div>
			))}
		</div>
	);
};

export default StationarySelector;
