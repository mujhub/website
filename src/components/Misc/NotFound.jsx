import React from "react";
import { H3 } from "../../styles/Shared/StyledTypes";
import { Link } from "react-router-dom";
import { Container as Flex } from "../../styles/Shared/Container";

const NotFound = () => {
	return (
		<div>
			<Flex p='0 5rem'>
				<H3>
					Uh oh! We're lost, let's head back <Link to='/'>home</Link> .
				</H3>
			</Flex>
		</div>
	);
};

export default NotFound;
