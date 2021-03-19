import styled from "styled-components";

export const HeaderStyle = styled.div`
	h4 {
		margin: 2rem 0;
	}

	margin-bottom: 2rem;
`;

export const BookFormStyle = styled.section`
	margin-top: 1rem;
	margin-bottom: 3rem;

	input,
	textarea,
	option,
	select {
		resize: vertical;
		color: ${(props) => props.theme.TEXT};
		padding: 0.5rem;
		min-width: 200px;
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
`;

export const InputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30vw;
	margin: 1rem 0;

	@media (max-width: 1366px) {
		width: 40vw;
	}

	@media (max-width: 768px) {
		width: calc(100vw - 3rem);
	}
`;

export const FormSection = styled.section`
	margin: 2rem 0;
	.additionalBooksLable {
		margin: 1rem 0;
		display: block;
	}

	@media (max-width: 768px) {
		textarea {
			width: calc(100vw - 4rem);
		}
	}
`;

export const ItemContainer = styled.div`
	margin: 2rem 0;
	width: 100%;
	max-width: fit-content;
	display: grid;
	// padding: 1rem;
	grid-template-columns: auto auto auto;
	border-radius: 4px;
	border: 2px solid;
	border-color: ${(props) => (props.isPackSelected ? props.theme.GREEN1 : "#00000000")};

	@media (max-width: 768px) {
		// padding: 1rem;
		grid-template-columns: auto;
		align-items: center;
		justify-content: center;
		width: calc(100vw - 4rem);
	}
`;

export const Item = styled.div`
	cursor: pointer;
	width: calc(100vw / 3 - 10rem - 1rem);
	// padding: 1rem;
	border-radius: 4px;
	margin: 0.5rem;
	height: fit-content;
	background-color: ${(props) => (props.selected ? props.theme.SELECTED : props.theme.BG2)};
	box-shadow: 0px 0px 20px ${(props) => (props.selected ? props.theme.SELECTED : "rgba(0, 0, 0, 0.1)")}50;

	p {
		margin: 0.5rem;
	}

	@media (max-width: 768px) {
		width: calc(100vw - 8rem);
		margin: 0.5rem;
	}
`;

export const PriceSection = styled.div`
	text-align: center;
	/* background-color: ${(props) => (props.final ? props.theme.BG2 : props.theme.BG)}; */
	padding: ${(props) => (props.final ? "1rem" : "0.5rem")};
	border-radius: 4px;
	p {
		font-weight: 500;
	}
`;
