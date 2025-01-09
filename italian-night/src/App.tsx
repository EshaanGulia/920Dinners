import React from "react";
import NavBar from "./components/NavBar";
import PartyDetails from "./components/PartyDetails";
import MenuSection from "./components/MenuSection";
import DrinksSection from "./components/DrinksSection";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <div style={{ 
        position: "relative", 
        textAlign: "center", 
        overflow: "hidden", 
        height: "60vh" // Adjusts the hero image height
      }}>
        {/* Main Image */}
        <img 
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRuMdypqdU43nrQvvFJ_0D48joe2aBQ4gX6546cTm0u60oA4Qz_JhPnXufPaepq3QQH06WEAaPkLW7ru9Sih3o_VgrsafUFDpK87Qn2rw" 
          alt="Welcome to Italy" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            filter: "brightness(70%)", // Adds a dimming effect
          }} 
        />

        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))", // Adds the gradient effect
          zIndex: 1
        }} />

        {/* Welcome Text */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "4em",
          fontWeight: "bold",
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "2px",
          animation: "fadeIn 2s ease-in-out",
          zIndex: 2
        }}>
          Welcome to Italy
        </div>

        {/* Decorative Divider */}
        <div style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "2px",
          opacity: 0.8,
          zIndex: 2
        }} />
      </div>

      {/* Main Content */}
      <div style={{ 
        textAlign: "center", 
        alignContent: "center", 
        padding: "20px", 
        backgroundColor: "#222", // Adds a dark background to the menu
        color: "white" 
      }}>
        {/* Party Details Section */}
        <div id="details">
          <PartyDetails />
        </div>

        {/* Menu Section */}
        <div id="menu">
          <MenuSection />
        </div>

        {/* Drinks Section */}
        <div id="drinks">
          <DrinksSection />
        </div>
      </div>
    </>
  );
};

export default App;
