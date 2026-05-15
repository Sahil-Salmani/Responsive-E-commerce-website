import React from "react";
import { House, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav  sticky top-0 z-50  bg-gray-800 min-h-[70px] w-full rounded-sm border-b border-orange-800">
        <nav className="flex items-center min-h-[70px]">
          <div className="flex items-center w-full">
            <House onClick={() => navigate("/")} className=" text-orange-400 h-10 w-10 mx-10" />
            <span onClick={() => navigate("/")}  className="text-white font-bold text-[30px] cursor-pointer">
              i
            </span>
            <span onClick={() => navigate("/")}  className="text-orange-400 font-bold text-[30px] cursor-pointer">
              Cart
            </span>
            <div className="ml-auto relative mr-6">
              <ShoppingCart onClick={() => navigate("/cart")}  className="text-orange-400 h-10 w-10 mx-10 ml-auto" />

               <span className="absolute -top-2 right-6 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            </div>
            {/* <ShoppingCart
  onClick={() => navigate("/cart")}
  className="text-orange-400 h-10 w-10 mx-10 ml-auto cursor-pointer"
/> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
