import React from "react";

const CTA = () => {
  return (
    <div className="hero bg-base-200 min-h-96 bg-linear-to-r from-indigo-500 to-purple-500 text-white">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="pt-6">
            Join thousands of professionals who are already using Digitools to
            work smarter.
          </p>
          <p>Start your free trial today.</p>
          <div className="flex justify-center items-center">
            <button className="btn btn-primary mx-6 rounded-full">
              Explore Products
            </button>
            <button className="btn btn-primary mx-6 rounded-full">
              View Pricing
            </button>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
