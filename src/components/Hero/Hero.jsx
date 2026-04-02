import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
        <img src="./assets/banner.png" />
        <div className="lg:max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 my-3 rounded-full bg-violet-100 text-indigo-600 text-sm font-medium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.2"
                width="16"
                height="16"
                rx="8"
                fill="url(#paint0_linear_2_340)"
              />
              <rect
                opacity="0.4"
                x="2"
                y="2"
                width="12"
                height="12"
                rx="6"
                fill="url(#paint1_linear_2_340)"
              />
              <rect
                x="5"
                y="5"
                width="6"
                height="6"
                rx="3"
                fill="url(#paint2_linear_2_340)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_340"
                  x1="-5.10067"
                  y1="8.91954"
                  x2="16.009"
                  y2="8.60591"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4F39F6" />
                  <stop offset="1" stop-color="#9514FA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_340"
                  x1="-1.8255"
                  y1="8.68966"
                  x2="14.0068"
                  y2="8.45443"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4F39F6" />
                  <stop offset="1" stop-color="#9514FA" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_340"
                  x1="3.08725"
                  y1="8.34483"
                  x2="11.0034"
                  y2="8.22722"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4F39F6" />
                  <stop offset="1" stop-color="#9514FA" />
                </linearGradient>
              </defs>
            </svg>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-md py-6">
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
