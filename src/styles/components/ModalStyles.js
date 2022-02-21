import styled from "styled-components";

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.BG2};
  padding: 2.5rem;
	padding-bottom: 1.5rem;
	maxWidth: 90%;
  display: grid;
	line-height: 1.6;
	grid-template-row: 1fr 2fr 1fr;
	gap: 1rem;
	max-width: 600px;

	@media (max-width: 900px) {
		width: 75vw;
		padding:1.5rem;
		padding-bottom: 1rem;
	}
`;

export const ModalAction = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 900px) {
		justify-content: center;
	}
`;

export const CloseButton = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	color: ${(props) => props.theme.RED};
	font-size: 1.25rem;
`;

export const ModalHeading = styled.div`
	line-height: 1.6;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;

	h3 {
		margin: 0.5rem 0;
	}
`;