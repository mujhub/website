import React, { useState, useCallback, useContext, useEffect } from "react";
import { withRouter, Redirect, useHistory, useRouteMatch } from "react-router-dom";
import { auth } from "../../services/firestore";
import { useAuth, AuthContext } from "../../contexts/Auth";

const LoginForm = () => {
	const { login, currentUser } = useAuth();
	const history = useHistory();
	const { path } = useRouteMatch();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			setIsLoading(true);
			const { email, password } = event.target.elements;

			if (!email.value) throw Error("Please enter an email");
			if (!password.value) throw Error("Please enter your password");

			await login(email.value, password.value);

			history.replace("/mess");
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			if (error) setError("");
		}, 5000);
	}, [error]);

	return (
		<div>
			{currentUser ? <Redirect to={"/mess"} /> : null}
			<div>Mess Login</div>
			{error ? <div>{error}</div> : null}
			<form onSubmit={handleLogin}>
				<input disabled={isLoading} placeholder='Email' name='email' type='email' />
				<input disabled={isLoading} placeholder='Password' name='password' type='password' />
				<button disabled={isLoading} type='submit'>
					{!isLoading ? "Log In" : "Loading..."}
				</button>
			</form>
		</div>
	);
};

export default withRouter(LoginForm);
