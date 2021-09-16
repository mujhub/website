import { storage } from "./firebase";

// export const uploadOrder = ({ b64string }) => {
export const uploadOrder = async ({ name, b64string }) => {
  try {
    const fileName = `${name}-${new Date().getTime()}`;
    const uploadRef = storage.ref("/kumawat-orders/");
    const file = uploadRef.child(`${fileName}.jpeg`);
    await file.putString(b64string, "data_url");
    const dUrl = await file.getDownloadURL();
    if (!dUrl.error) return dUrl;
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
