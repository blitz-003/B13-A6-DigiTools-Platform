import React, { useState, Suspense } from "react";
import { use } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Cart from "../Cart/Cart";

const fetchProducts = fetch("/data.json").then((res) => res.json());

const Products = ({ cart, setCart }) => {
  const products = use(fetchProducts);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="p-10 bg-base-100 rounded-2xl">
      {" "}
      {/* Outer div rounded */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="pt-4 text-md text-gray-600">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div
          role="tablist"
          className="tabs tabs-box max-w-[50%] md:max-w-[25%] mx-auto justify-center my-8 rounded-full overflow-hidden border border-gray-300 p-0"
        >
          <button
            role="tab"
            className={`tab w-[50%] rounded-full text-md font-bold ${
              activeTab === "products"
                ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>

          <button
            role="tab"
            className={`tab w-[50%] rounded-full text-md font-bold ${
              activeTab === "cart"
                ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart {cart.length > 0 && `(${cart.length})`}
          </button>
        </div>
      </div>
      {activeTab === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-y-8 max-w-[80%] mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-[80%] mx-auto">
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}
    </div>
  );
};

export default Products;
