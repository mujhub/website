import styled from "styled-components";
import theme from "../../theme";

export const Divider = styled.div`
	height: 1px;
	background-color: ${(props) => props.theme.DIVIDER};
`;

export const Hero = styled.div`
	width: 100%;
	align-self: flex-end;
	.desktop {
		@media (max-width: 768px) {
			margin-top: 6rem;
			padding-right: 1rem;
		}
	}
	.mobile {
		.buttons {
			display: flex;
			a {
				margin-right: 1rem;
			}
			@media (max-width: 768px) {
				flex-direction: column;
				a {
					margin-right: 0;
					width: auto;
					justify-content: center;
				}
			}
		}
		@media (max-width: 768px) {
			display: block;
		}
	}
`;

export const Card = styled.div`
	padding: 1.5rem;
	max-width: 250px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* margin-right: 2rem; */

	.icon {
		padding: 1rem;
		width: fit-content;
		color: white;
		background-color: ${(props) => props.color};
		box-shadow: 0px 0px 20px ${(props) => props.color}50;
		border-radius: 8px;
	}
	.text {
		text-align: center;
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const CardStack = styled.div`
	margin-top: 1.5rem;
	display: grid;
	align-items: baseline;
	grid-template-columns: auto auto auto auto;

	@media (max-width: 768px) {
		grid-template-columns: auto auto;
	}
`;

export const Subheading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 1rem;

	h4 {
		margin: 0 0 1rem 0;
	}

	p {
		color: ${(props) => props.theme.PLACEHOLDER};
	}
`;

export const FormStyles = styled.section`
	div {
		display: flex;
		flex-direction: column;
		label {
			margin-top: 1rem;
			margin-bottom: 1rem;
			margin-right: 2rem;
		}
		input,
		textarea,
		option,
		select {
			color: ${(props) => props.theme.TEXT};
			padding: 1rem;
			background-color: ${(props) => props.theme.FIELD};
			border: none;
			border-radius: 4px;
			font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
				"Helvetica Neue", sans-serif;
			::placeholder {
				font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
					"Helvetica Neue", sans-serif;
			}
		}

		textarea {
			resize: vertical;
			height: 20vh;
			width: 40vw;

			@media (max-width: 768px) {
				width: 80vw;
			}
		}
	}
	.submitBtn {
		padding: 1rem;
		margin: 1.5rem 0;
		width: 100%;
		display: block;
		@media (max-width: 768px) {
			width: 100%;
		}
	}

	option,
	select {
		padding: 1rem;
	}

	.checkbox {
		margin-right: 0.5rem;
	}
`;
