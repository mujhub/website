import React from "react";
import LoginForm from "../components/Mess/LoginForm";

const MessLogin = ({ history }) => {
	return (
		<div>
			<LoginForm history={history} />
		</div>
	);
};

export default MessLogin;
