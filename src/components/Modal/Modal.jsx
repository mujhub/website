import React from "react";
import ReactModal from "react-modal";
import { ModalContent, ModalAction, ModalHeading, CloseButton } from "../../styles/components/ModalStyles";
import {IoClose} from "react-icons/io5";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
		// margin: "0 -50%",
    transform: "translate(-50%, -50%)",
		padding: "0",
		borderRadius: "8px",
		maxWidth:"90%",
		outline: "none",
	},
	overlay: {
	}
};

export const Modal = ({ children, isOpen, onClose, title, action }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel=''
    >
      <ModalContent>
				<ModalHeading>
					<h3>{title}</h3>
					<CloseButton onClick={onClose}>
						<IoClose/>
					</CloseButton>
				</ModalHeading>
				<div>{children}</div>
				<ModalAction>
					{action}
				</ModalAction>
      </ModalContent>
    </ReactModal>
  );
};
