import React from "react";

const Steps = () => {
  return (
    <div className="bg-base-200 py-28">
      <h1 className="text-4xl font-bold text-center">Get Started in 3 Steps</h1>
      <p className="pt-4 text-md text-gray-600 text-center">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="flex gap-4 bg-base-200 max-w-[70%] mx-auto mt-4">
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <div className="w-full">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              01
            </div>
          </div>

          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-28 rounded-full bg-primary/20 flex items-center justify-center">
                <img src="./assets/user.png" alt="" className="w-16 h-16" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <div className="w-full">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              02
            </div>
          </div>

          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-28 rounded-full bg-primary/20 flex items-center justify-center">
                <img src="./assets/package.png" alt="" className="w-16 h-16" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Choose Products</h2>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <div className="w-full">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              03
            </div>
          </div>

          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-28 rounded-full bg-primary/20 flex items-center justify-center">
                <img src="./assets/rocket.png" alt="" className="w-16 h-16" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Start Creating</h2>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
