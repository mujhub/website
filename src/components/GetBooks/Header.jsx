import React from "react";
import { HeaderStyle } from "../../styles/components/BookStyles";

import { Type, H4, H6 } from "../../styles/Shared/StyledTypes";

const Header = () => {
	return (
		<HeaderStyle>
			<H4>Books and Stationery Rentals</H4>
			<Type>
				MUJ HUB has tied up with the local book and stationery dealers giving you access to all their items even while you're stuck in the hostel
				amidst the COVID-19 restrictions.
			</Type>
			<H6>Rental Books and Stationery Delivered To The Hostel Gate!</H6>
			<Type>
				The books sold individually or in packs can be availed through the form given below. After confirming your order through MUJ HUB, the local
				dealer, "Kumawat Stationery" will contact you regarding additional prices (if any) and the collection of the books/stationery items from the
				hostel gate. The payment is to be made to the delivery personnel on collection of the order.
			</Type>
		</HeaderStyle>
	);
};

export default Header;
