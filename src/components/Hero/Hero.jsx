import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
        <img src="./assets/banner.png" />
        <div className="lg:max-w-xl">
          <h1 className="text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn text-md rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white">
              Explore Products
            </button>
            <button class="p-0.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 overflow-hidden">
              <span class="flex items-center justify-center px-4 py-2 bg-base-100 rounded-full text-md">
                <img src="./assets/Play.png" className="px-2"></img> Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
