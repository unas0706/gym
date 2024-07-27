import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Review from "../components/Review";
import Faclities from "../components/Faclities";
import Trainer from "../components/Trainer";
import Join from "../components/Join";
import Footer from "../components/Footer";
import More from "../components/More";

const Home = () => {
  const [myStyle, setMyStyle] = useState({
    display: "none",
  });

  return (
    <>
      <Navbar myStyle={myStyle} setMyStyle={setMyStyle} />
      <More setMyStyle={setMyStyle} myStyle={myStyle} />
      <Hero />
      <Service />
      <Review />
      <Faclities />
      <Trainer />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
