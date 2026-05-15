import React, { useEffect, useState } from "react";
import {data, useNavigate } from "react-router-dom";
// import { useState } from 'react'

const Product = ({ cart, setcart }) => {
  const navigate = useNavigate();

  const [product, setproduct] = useState([]);
  const [allProduct, setallProduct] = useState([]);
  const [catagory, setcatagory] = useState("All");
  const getproduct = async () => {
    const fetchProduct = await fetch("https://fakestoreapi.com/products");
    const data = await fetchProduct.json();
    setproduct(data);
    setallProduct(data);
  };

  useEffect(() => {
    getproduct();
  }, []);

  const showDetail = (cardDetail) => {
    let id = cardDetail.id;
    //   console.log("clicked", cardDetail.id)
    navigate(`/user/${id}`);
  };

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    let filtered = allProduct.filter((curValue) => {
      return curValue.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setproduct(filtered);
  };

  const handleSelect = (e) => {
    let selectValue = e.target.value;
    setcatagory(selectValue);
    if (selectValue === "Price low to High") {
      let sorting = [...allProduct].sort((a, b) => {
        return a.price - b.price;
      });
      setproduct(sorting);
    }
    if (selectValue === "Price High to Low") {
      let sorting = [...allProduct].sort((a, b) => {
        return b.price - a.price;
      });
      setproduct(sorting);
    }
    if (selectValue === "All Product") {
      setproduct(allProduct);
    }
  };

  const addToCart = (item) => {
    setcart([...cart, item]);
  };

  return (
    <>
      

      <div className="bg-gray-900 min-h-screen w-full overflow-x-hidden flex flex-col items-center">
        <div className="input-container bg-gray-700 min-h-[70px] w-full max-w-6xl px-4 rounded-lg flex items-center justify-center mt-10">
          <input
            className="border border-white/30 w-full p-3 rounded-lg text-white outline-none"
            type="text"
            placeholder="Search items by name of feature....."
            onChange={handleSearch}
          />
        </div>

        <div className="product-container flex flex-wrap justify-center gap-6 w-full max-w-7xl px-4 py-10">
          {product.length > 0 ? (
            product.map((curValue, index) => {
              return (
                <div
                  className="card flex flex-col justify-between p-4 w-full sm:w-64 min-h-[350px] bg-white rounded-lg text-black"
                  key={index}
                >
                  <div
                    onClick={() => showDetail(curValue)}
                    className="flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <img
                      className="h-40 object-contain"
                      src={curValue?.image}
                      alt=""
                    />

                    <div className="text-[16px] text-center line-clamp-2 font-medium">
                      {curValue?.title}
                    </div>

                    <div className="font-bold text-lg">${curValue?.price}</div>
                  </div>

                  <button
                    onClick={(e) =>{ e.stopPropagation(); addToCart(curValue);}}
                    className="bg-orange-600 text-white font-bold py-2 rounded-xl hover:bg-orange-700 duration-300 w-full"
                  >
                    Add To Cart
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-white">Sorry product not available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
