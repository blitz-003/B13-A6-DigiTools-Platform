import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Statistics></Statistics>
      <Products></Products>
      <Cart></Cart>
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA />
      <Footer></Footer>
    </>
  );
}

export default App;
