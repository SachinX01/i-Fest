import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import MainEvents from "../components/MainEvents/MainEvents";
import Gallery from "../components/Gallery/Gallery";
import ReactGA from "react-ga";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <MainEvents/>
      <Gallery />
      <Contact />
    </>
  );
};

export default Homepage;
