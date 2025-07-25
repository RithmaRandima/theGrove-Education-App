import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={"OUR PROGRAM"} title={"What We Offer"} />
        <Programs />
        <About />
        <Title subTitle={"Gallery"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"TESTIMONIALS"} title={"What Student Says"} />
        <Testimonials />
        <Title subTitle={"CONTACT US"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
