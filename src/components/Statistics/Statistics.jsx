import React from "react";

const Statistics = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full text-center px-10 py-24 bg-linear-to-r from-indigo-500 to-purple-500 text-white">
      <div className="stat md:border-r-4">
        <div className="stat-value">50K+</div>
        <div className="stat-desc text-lg text-white">Active Users</div>
      </div>

      <div className="stat md:border-r-4">
        <div className="stat-value">200+</div>
        <div className="stat-desc text-lg text-white">Premium tools</div>
      </div>

      <div className="stat">
        <div className="stat-value">4.9</div>
        <div className="stat-desc text-lg text-white">Rating</div>
      </div>
    </div>
  );
};

export default Statistics;
