
import React, { useState } from "react";

const Purchase = () => {

    const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

    const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      number === "" ||
      address === "" ||
      city === "" ||
      pincode === ""
    ) {
      alert("Please Enter Details");
    } else {
      alert("Order Confirmed Please Check Your Email");
    }
  };

    

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
      
      <form className="bg-gray-800 w-full max-w-3xl rounded-2xl p-8 shadow-2xl border border-white/10">
        
        <h1 className="text-white text-4xl font-bold text-center mb-10">
          Checkout Details
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-white mb-2 font-semibold">
              Full Name
            </label>

            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-xl outline-none border border-white/10 focus:border-orange-500"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-white mb-2 font-semibold">
              Contact Number
            </label>

            <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-xl outline-none border border-white/10 focus:border-orange-500"
              type="number"
              placeholder="Enter your number"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-white mb-2 font-semibold">
              Address
            </label>

            <textarea
             value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-xl outline-none border border-white/10 focus:border-orange-500 h-28 resize-none"
              placeholder="Enter your full address"
            ></textarea>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-white mb-2 font-semibold">
              City
            </label>

            <input
            value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-xl outline-none border border-white/10 focus:border-orange-500"
              type="text"
              placeholder="Enter your city"
            />
          </div>

          {/* Pincode */}
          <div className="flex flex-col">
            <label className="text-white mb-2 font-semibold">
              Pin Code
            </label>

            <input
            value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-xl outline-none border border-white/10 focus:border-orange-500"
              type="text"
              placeholder="Enter pincode"
            />
          </div>

        </div>

        {/* Payment Method */}
        <div className="mt-8">
          <h2 className="text-white text-2xl font-bold mb-4">
            Payment Method
          </h2>

          <div className="flex gap-4 flex-wrap">

            <button
              type="button"
              className="bg-gray-700 text-white px-6 py-3 rounded-xl border border-white/10 hover:border-orange-500 duration-300"
            >
              Cash on Delivery
            </button>

            <button
              type="button"
              className="bg-gray-700 text-white px-6 py-3 rounded-xl border border-white/10 hover:border-orange-500 duration-300"
            >
              UPI
            </button>

            <button
              type="button"
              className="bg-gray-700 text-white px-6 py-3 rounded-xl border border-white/10 hover:border-orange-500 duration-300"
            >
              Card
            </button>

          </div>
        </div>

        {/* Submit */}
        <button
        onClick={handlePlaceOrder}
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 duration-300 text-white font-bold py-4 rounded-xl mt-10 text-lg"
        >
          Place Order
        </button>

      </form>
    </div>
  );
};

export default Purchase;