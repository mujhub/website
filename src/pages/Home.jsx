import React from "react";

import { Hero } from "../components/Hero";
import { MessMenuCard } from "../components/Mess/MessMenu";
import { Container } from "../styles/Shared/Container";

const Home = () => (
	<Container>
		<Hero />
		<MessMenuCard />
	</Container>
);
export default Home;
