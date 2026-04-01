import React from "react";
import { use } from "react";

const fetchProducts = fetch("/data.json").then((res) => res.json());
const Products = () => {
  const products = use(fetchProducts);
  return (
    <div className="p-10 bg-base-100">
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
          <p className="pt-4 text-md text-gray-600">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div
          role="tablist"
          className="tabs tabs-box max-w-[20%] mx-auto justify-center my-6"
        >
          <a role="tab" className="tab w-[50%]">
            Products
          </a>
          <a role="tab" className="tab tab-active w-[50%]">
            Cart
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center gap-y-8 max-w-[80%] mx-auto">
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="w-full flex justify-end">
              <div className="badge badge-soft badge-warning">Warning</div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="../../assets/products/design-tool.png"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold">AI writing Pro</h2>

            <p className="text-xl">
              $29<span className="text-gray-600 text-lg">/mo</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  High-resolution image generation
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Customizable style templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  Batch processing capabilities
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
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
                <span className="text-gray-600">
                  AI-driven image enhancements
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
