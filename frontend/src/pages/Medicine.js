// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TbSearch } from "react-icons/tb";
// import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
// import "./Header.scss";
// import Search from "./Search/Search";
// import { Context } from "../../utils/context";
// import Cart from "../Cart/Cart";







// import { useNavigate } from "react-router-dom";

// import "./Category.scss";
// import React, { useEffect, useState } from 'react';
// import './Medicine.css';
// import { fetchDataFromApi } from './utils/api';
// const Medicine = () => {
//   const [cartVisible, setCartVisible] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([])

//   const toggleCart = () => {
//     setCartVisible(!cartVisible);
//   };

//   const addToCart = () => {
//     const newItem = 'Medicine Name - $10.99';
//     setCartItems([...cartItems, newItem]);
//   };

//   const buyNow = () => {
//     alert('Redirecting to checkout page...');
//   };

//   const checkout = () => {
//     alert('Redirecting to checkout page...');
//   };

//   const getMedicines = () => {
//     fetchDataFromApi("/api/products?populate=*").then((res) => {
//         console.log(res)
//         setProducts(res);
//     });
// };

//   useEffect(() => {
//     getMedicines()
//     console.log(products)
//   }, [])


//   const Medicine = ({categories}) => {
    

//     const getProducts = () => {
//         fetchDataFromApi("/api/products?populate=*").then((res) => {
//             setProducts(res);
//         });
//     };
    
   
    
//     const navigate = useNavigate();
//     return (
//         <div>
            
//             <div className="shop-by-category">
//             <div className="categories">
//                 {categories?.data?.map((item) => (
//                     <div
//                         key={item.id}
//                         className="category"
//                         onClick={() => navigate(`/category/${item.id}`)}
//                     >
//                         <img
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 item.attributes.img.data.attributes.url
//                             }
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </div>
//     );

// };}



// export default Medicine;
