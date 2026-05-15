import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const navigate = useNavigate();

     const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleBuy = (e) => {
    if(cart.length > 0 ){
        navigate("/Purchase")
    }else{
        alert("your cart is empty")
    }
    
  }
  

  return (
    <div className="bg-gray-900 min-h-screen w-full overflow-x-hidden p-4 sm:p-6 lg:p-10">
      <h1 className="text-white text-3xl font-bold mb-8">
        Cart Items
      </h1>

 <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col w-full lg:w-[65%] gap-5">
  {cart.length === 0 ? (
    <h1 className="text-white text-2xl text-center mt-20">
      No Cart Available
    </h1>
  ) : (
    cart.map((item) => {
      return (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg flex items-center gap-5"
        >
          <img
            src={item.image}
            alt=""
            className="h-24 w-24 object-contain"
          />

          <div>
            <h1 className="font-bold text-lg">
              {item.title}
            </h1>

            <p className="text-orange-600 font-semibold">
              ${item.price}
            </p>
          </div>
        </div>
      );
    })
  )}
</div>
<div className="sticky top-24 h-fit w-full lg:w-[30%] border border-white/20 rounded-xl py-2 p-2">
          
          <div className="text-white text-[30px] font-bold ">
            <p className="border-b-2 border-white/30 pb-3 text-center">
              Order Total
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            
            {/* Subtotal */}
            <div className="flex justify-between text-white text-lg border-b border-white/20 pb-3">
              <p>Subtotal</p>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-white text-lg border-b border-white/20 pb-3">
              <p>Shipping</p>
              <span className="text-green-400">Free</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-white text-2xl font-bold">
              <p>Total</p>
              <span className="text-orange-400">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Purchase Button */}
            <button onClick={handleBuy} className="bg-orange-600 hover:bg-orange-700 duration-300 text-white font-bold py-3 rounded-xl mt-5 text-lg">
              Purchase Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;