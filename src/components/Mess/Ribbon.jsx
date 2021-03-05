import React from "react";
import { useAuth } from "../../contexts/Auth";
import { auth } from "../../services/firestore";

const Ribbon = () => {
	const { currentUser } = useAuth();

	const handleLogout = () => {
		auth.signOut();
	};

	return (
		<div>
			{"Hello, " + currentUser.email}
			<div onClick={handleLogout}>Logout</div>
		</div>
	);
};

export default Ribbon;
