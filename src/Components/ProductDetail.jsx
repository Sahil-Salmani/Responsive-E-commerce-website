import React, { useEffect, useState } from "react";
import {data, useNavigate, useParams } from "react-router-dom";
import Purchase from "./Purchase";
// import { useState } from 'react'

const Product = ({ cart, setcart }) => {
  const navigate = useNavigate();

  const [product, setproduct] = useState({});
  // const [allProduct, setallProduct] = useState([]);
  // const [catagory, setcatagory] = useState("All");

  const id = useParams();
  console.log(id)
  const getproduct = async () => {
    const fetchProduct = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    const data = await fetchProduct.json();
    setproduct(data);
    // setallProduct(data);
  };

  useEffect(() => {
    getproduct();
  }, []);

   const addToCart = (item) => {
    setcart([...cart, item]);
  };

  const handleBuy = () => {
  if (product) {
    // alert("Order Confirmed");
    navigate("/Purchase")
  }
};
  
  return (
    <>
    <div className="bg-gray-800 min-h-screen flex flex-row">
      <button onClick={() => navigate("/")} className="mt-5 ml-5 bg-orange-600 h-[6vh] text-white px-5 py-2 rounded-lg hover:bg-orange-700 duration-300 ">back</button>
   {   <div className="container flex mx-10 ">
        <div className="card mt-10 bg-white w-72 h-[55vh] rounded-xl p-4 flex flex-col items-center gap-4 shadow-lg ">
          <img className="h-[25vh] object-contain" src={product?.image}/>
          <div className="text-center font-semibold line-clamp-2">{product?.title}</div>
          <div className="text-[18px] font-bold text-orange-600">{product?.price}</div>
            <button onClick={(e) =>{ e.stopPropagation(); addToCart(product);}} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 duration-300 w-full">
            Add To Cart
          </button>
        </div>
      </div>
        }

         <div className="text-white max-w-2xl mr-14 mt-12">

          <h1 className="text-4xl font-bold mb-5">
            {product?.title}
          </h1>

          <p className="text-lg text-gray-300 border bg-white/10 py-4 p-3 rounded-xl leading-8">
            {product?.description}
          </p>

          <div className="mt-3 text-2xl">
            Category:
            <span className="text-orange-400 ml-2">
              {product?.category}
            </span>

            <h2 className="mt-3">
              {product.price}</h2>
          </div>
          <button onClick={handleBuy} className="bg-orange-600 mt-4 text-white px-4 py-2 rounded-lg hover:bg-orange-700 duration-300 w-full">
          Buy Now</button>
        </div>
        
      </div>
    
  
    </>
  );
};

export default Product;
