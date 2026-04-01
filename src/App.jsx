import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Hero></Hero>
      <Statistics></Statistics>
      <Suspense
        fallback={<div className="text-center mt-10">Loading products...</div>}
      >
        <Products cart={cart} setCart={setCart} />
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <CTA />
      <Footer></Footer>
    </>
  );
}

export default App;
