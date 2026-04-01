import React from "react";

const Cart = () => {
  return (
    <div className="card card-border bg-base-100 w-[80%] mx-auto shadow-lg">
      <div className="">
        <div className="card-body">
          <h2 className="card-title">Your Cart</h2>

          <div className="cart-components">
            <div className="card card-border bg-base-200 flex flex-row justify-between items-center w-full p-4">
              <div className="flex gap-6 items-center">
                <div className="avatar">
                  <div className="w-12 rounded-full bg-white flex items-center justify-center">
                    <img
                      src="../../assets/products/design-tool.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div>
                  <p>Name</p>
                  <p>Price</p>
                </div>
              </div>

              <div>
                <button>Remove</button>
              </div>
            </div>
            <div className="card card-border bg-base-100"></div>
            <div className="card card-border bg-base-100"></div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div>
              <h1>Total</h1>
            </div>
            <div>
              <p>$78</p>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
