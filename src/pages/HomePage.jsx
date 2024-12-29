import React from "react";
import "./HomePage.css";
import LeftSection from "../components/New/components/LeftSection";
import RightSection from "../components/New/components/RightSection";
import MidSection from "../components/New/components/MidSection";
import Navbar from "../components/New/components/Navbar";

function HomePage() {
  return (
   
    <div className="portfolio">
      <header><Navbar /></header>
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}

export default HomePage;
