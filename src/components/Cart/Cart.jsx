import React from "react";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));

  // Safely convert price to number (remove $ if exists)
  const total = cart.reduce((sum, item) => {
    // Remove $ and convert to float
    const price = parseFloat(item.price.toString().replace("$", "")) || 0;
    return sum + price;
  }, 0);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Your cart heading */}
      <h2 className="text-2xl font-semibold">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 col-span-3 text-3xl">
          No products in cart
        </p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="card card-border bg-base-200 flex flex-row justify-between items-center w-full p-4"
          >
            <div className="flex gap-6 items-center w-full">
              <div className="avatar">
                <div className="w-12 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/assets/products/design-tool.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(item.id)}
              className="text-pink-500 p-0"
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="flex justify-between items-center w-full mt-6">
          <h1 className="font-semibold">Total</h1>
          {/* Only numeric total */}
          <p className="font-bold text-lg">{total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
