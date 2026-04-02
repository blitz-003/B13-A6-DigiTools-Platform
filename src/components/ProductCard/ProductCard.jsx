import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, cart, setCart }) => {
  const handleAdd = () => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
      toast.success(`${product.title} added to cart!`);
    }
  };

  // Badge color
  const badgeColor =
    product.badge === "Best Seller"
      ? "badge-soft badge-warning"
      : product.badge === "Popular"
        ? "badge-soft badge-primary"
        : "badge-soft badge-info";

  // Check if product is already in cart
  const isAdded = cart.find((item) => item.id === product.id);

  return (
    <div className="card w-80 bg-base-100 shadow-sm">
      <div className="card-body">
        {product.badge && (
          <div className={`badge ${badgeColor} mb-2`}>{product.badge}</div>
        )}

        <div className="avatar mb-4">
          <div className="w-12 rounded-full shadow-lg bg-white flex items-center justify-center">
            {console.log(product.img)}
            <img src={product.img} alt="" className="w-6 h-6" />
          </div>
        </div>

        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <p className="text-xl mt-2">
          ${product.price}
          {product.type && (
            <span className="text-gray-600 text-lg">/{product.type}</span>
          )}
        </p>

        <ul className="mt-4 flex flex-col gap-2 text-xs">
          {product.features.map((f, idx) => (
            <li key={idx} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            className="btn btn-primary btn-block text-white"
            onClick={handleAdd}
            disabled={isAdded} 
          >
            {isAdded ? "Added" : product.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
