// import React, { useState, useEffect } from "react";
// import html2canvas from "html2canvas";

// import { Container as Flex } from "../styles/Shared/Container";
// import { Type, H6 } from "../styles/Shared/StyledTypes";
// import { Button } from "../styles/Shared/Button";
// import { Divider } from "../styles/components/HomeStyles";
// import {
//   BookFormStyle,
//   InputWrapper,
//   FormSection,
//   PriceSection,
// } from "../styles/components/BookStyles";

// import BooksSelector from "../components/GetBooks/BooksSelector";
// import Header from "../components/GetBooks/Header";
// import StationerySelector from "../components/GetBooks/StationerySelector";
// import Modal from "../components/GetBooks/Modal";

// import { getBookStoreData } from "../services/firestore";
// import { uploadOrder } from "../services/storage";
// import Invoice from "../components/GetBooks/Invoice";
// import { PRIMARY } from "../constants/colours/colours";

// const GetBooks = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentCycle, setCurrentCycle] = useState("p");
//   const [isPackSelected, setIsPackSelected] = useState(true);
//   const [booksPrice, setBooksPrice] = useState([0, 0]);
//   const [stationeryPrice, setStationeryPrice] = useState(0);

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [physicsCycle, setPhysicsCycle] = useState([]);
//   const [chemistryCycle, setChemistryCycle] = useState([]);
//   const [booksData, setBooksData] = useState([]);
//   const [additionalBooks, setAdditionalBooks] = useState("");
//   const [stationeryData, setStationeryData] = useState([]);

//   const [showModal, setShowModal] = useState(false);
//   const [currentOrder, setCurrentOrder] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [downloadUrl, setDownloadUrl] = useState("");
//   const [error, setError] = useState(false);
//   const [isOrdering, setIsOrdering] = useState(false);

//   const handleCycleChange = (e) => {
//     setCurrentCycle(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleBookSelect = (i) => {
//     let data = booksData;
//     data[i].selected = !data[i].selected;
//     setBooksData([...data]);
//   };

//   const handleAdditionalBooksChange = (e) => {
//     setAdditionalBooks(e.target.value);
//   };
//   const handleStationerySelect = (i) => {
//     let data = stationeryData;
//     data[i].selected = !data[i].selected;
//     setStationeryData([...data]);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !phone) {
//       alert("Please enter the required details to continue.");
//       return;
//     }

//     setIsLoading(false);

//     const final = {
//       name,
//       phone,
//       booksData,
//       additionalBooks,
//       stationeryData,
//       booksPrice,
//       stationeryPrice,
//     };
//     setShowModal(true);
//     setCurrentOrder(final);
//     setSubmitted(true);
//     return final;
//   };

//   const fetchData = async () => {
//     try {
//       setIsLoading(true);
//       const res = await getBookStoreData();
//       if (!res) return;
//       if (!res.exists) return;

//       let data = res.data();
//       if (data.physicsCycle) setPhysicsCycle([...data.physicsCycle]);
//       if (data.chemistryCycle) setChemistryCycle([...data.chemistryCycle]);
//       if (data.stationery) setStationeryData([...data.stationery]);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//     setCurrentCycle("p");
//   };

//   const placeOrder = async () => {
//     const body = document.querySelector("body");
//     setIsOrdering(true);
//     const canvas = await html2canvas(body);
//     try {
//       const url = await uploadOrder({
//         name,
//         b64string: canvas.toDataURL("image/jpeg", 0.05),
//       });
//       console.log(url);
//       if (url) {
//         setOrderPlaced(true);
//         setDownloadUrl(url);
//       } else {
//         setOrderPlaced(false);
//         setError(true);
//       }
//     } catch (error) {
//       console.log(`error`, error);
//       setOrderPlaced(false);
//       setError(true);
//     } finally {
//       setIsOrdering(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     setBooksData(currentCycle === "p" ? physicsCycle : chemistryCycle);
//   }, [currentCycle, isLoading]);

//   useEffect(() => {
//     let areSelectedInPack = true;
//     booksData.forEach((book) => {
//       if (book.isPack) {
//         if (!book.selected) {
//           areSelectedInPack = false;
//         }
//       }
//     });
//     setIsPackSelected(areSelectedInPack);

//     let price = !areSelectedInPack ? [0, 0] : [2000, 2000];
//     booksData.forEach((book) => {
//       if (book.selected)
//         if (areSelectedInPack) {
//           if (!book.isPack) {
//             price[0] += book.price[0];
//             price[1] += book.price[1];
//           }
//         } else {
//           price[0] += book.price[0];
//           price[1] += book.price[1];
//         }
//     });
//     setBooksPrice(price);
//   }, [booksData]);

//   useEffect(() => {
//     let price = 0;
//     stationeryData.forEach((item) => {
//       if (item.selected)
//         if (typeof item.price === "object") price += item.price[1];
//         else price += item.price;
//     });
//     setStationeryPrice(price);
//   }, [stationeryData]);

//   return (
//     <Flex column p="1rem 10rem">
//       {submitted === true ? (
//         <Modal
//           show={showModal}
//           hide={setShowModal}
//           data={currentOrder}
//           setSubmitted={setSubmitted}
//         />
//       ) : null}

//       {!submitted && (
//         <>
//           <Header />
//           <Divider />
//           <BookFormStyle>
//             <form onSubmit={handleFormSubmit}>
//               <FormSection>
//                 <H6>Current cycle</H6>
//                 <InputWrapper>
//                   <label>Select your cycle</label>
//                   <select id="cycle" onChange={handleCycleChange}>
//                     <optgroup label="First Year">
//                       <option value="p">Physics</option>
//                       <option value="c">Chemistry</option>
//                     </optgroup>
//                   </select>
//                 </InputWrapper>
//               </FormSection>
//               <FormSection>
//                 <H6>Contact Details</H6>
//                 <InputWrapper>
//                   <label>Full Name</label>
//                   <input
//                     placeholder="Full Name"
//                     name="name"
//                     onChange={handleNameChange}
//                     value={name}
//                   />
//                 </InputWrapper>
//                 <InputWrapper>
//                   <label>Phone Number</label>
//                   <input
//                     placeholder="Phone Number"
//                     name="phone"
//                     onChange={handlePhoneChange}
//                     value={phone}
//                   />
//                 </InputWrapper>
//               </FormSection>
//               <Divider />

//               <FormSection>
//                 <BooksSelector
//                   booksData={booksData}
//                   handleBookSelect={handleBookSelect}
//                   isPackSelected={isPackSelected}
//                   additionalBooks={additionalBooks}
//                   handleAdditionalBooksChange={handleAdditionalBooksChange}
//                   booksPrice={booksPrice}
//                 />
//               </FormSection>
//               <Divider />
//               <FormSection>
//                 <StationerySelector
//                   stationeryData={stationeryData}
//                   handleStationerySelect={handleStationerySelect}
//                   stationeryPrice={stationeryPrice}
//                 />
//               </FormSection>

//               <Divider />
//               <FormSection>
//                 <PriceSection final>
//                   <Type style={{ fontWeight: 600 }}>
//                     (Books + Stationery)
//                     <br />
//                     {`Grand Total:  ₹ ${booksPrice[0] + stationeryPrice}`}
//                     {booksPrice[0] !== booksPrice[1]
//                       ? ` to ₹ ${booksPrice[1] + stationeryPrice}`
//                       : null}
//                     <br />
//                   </Type>
//                   {isPackSelected && (
//                     <Type style={{ fontWeight: 500 }}>
//                       Effective Grand Total <br /> ₹{" "}
//                       {booksPrice[0] + stationeryPrice} - ₹ 1000
//                       <br /> ₹{booksPrice[0] + stationeryPrice - 1000}
//                       {additionalBooks ? (
//                         <Type>
//                           *The additional books chosen will be subject to
//                           availability. The vendor will contact you regarding
//                           the pricing.
//                         </Type>
//                       ) : (
//                         ""
//                       )}
//                     </Type>
//                   )}
//                   <Button type="submit" disabled={isLoading}>
//                     {!isLoading ? "CONTINUE" : "LOADING..."}
//                   </Button>
//                 </PriceSection>
//               </FormSection>
//             </form>
//           </BookFormStyle>
//         </>
//       )}
//       <div id="invoice">
//         {submitted && !orderPlaced && (
//           <Invoice
//             data={currentOrder}
//             placeOrder={placeOrder}
//             error={error}
//             orderPlaced={orderPlaced}
//             isOrdering={isOrdering}
//           />
//         )}
//       </div>
//       {orderPlaced && !error && (
//         <div>
//           <Type>
//             Order Placed Successfully! The dealer will contact you soon!
//           </Type>
//           <br />
//           <a href={downloadUrl} rel="noreferrer" target="_BLANK">
//             <Type style={{ color: PRIMARY }}>Download Receipt</Type>
//           </a>
//         </div>
//       )}
//       {!orderPlaced && error && (
//         <Type>Oops! An error ocurred. Please try again after some time.</Type>
//       )}
//     </Flex>
//   );
// };

// export default GetBooks;
