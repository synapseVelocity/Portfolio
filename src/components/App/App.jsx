import React, { useState } from "react";
import "./App.css";
import Home from "../home/home.jsx";
import Project from "../projects/project.jsx";
import About from "../about/about.jsx";
import Hire from "../hire/hire.jsx";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to render the correct component based on activeComponent state
  function rendering() {
    switch (activeComponent) {
      case "home":
        return <Home setActiveComponent={setActiveComponent} />; // Pass setActiveComponent to Home
      case "project":
        return <Project />; // Return the actual JSX component
      case "about":
        return <About />; // Placeholder
      case "hire":
        return <Hire />; // Placeholder
      default:
        return <Home setActiveComponent={setActiveComponent} />; // Fallback to Home component
    }
  }

  // Function to handle navigation clicks
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };


  return(
    <>
      <header>
        <p>&lt;Synapse Velocity /&gt;</p>
        <nav>
          <button
            onClick={() => handleNavClick("home")}
            className={`nav-btn ${activeComponent === "home" ? "active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("project")}
            className={`nav-btn ${
              activeComponent === "project" ? "active" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`nav-btn ${activeComponent === "about" ? "active" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("hire")}
            className={`nav-btn ${activeComponent === "hire" ? "active" : ""}`}
          >
            Hire
          </button>
        </nav>
      </header>
      {rendering()}
    </>
  );
}
