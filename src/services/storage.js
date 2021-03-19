import { storage } from "./firebase";

// export const uploadOrder = ({ b64string }) => {
export const uploadOrder = () => {
	return storage
		.ref("/kumawat-orders/")
		.child("test.png")
		.putString(
			"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",
			"base64"
		);
};