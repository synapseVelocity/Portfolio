
import React, { useState } from "react";
import "./App.css";
import Home from "../home/home.jsx";
import Project from "../projects/project.jsx";
import About from "../about/about.jsx";
import Hire from "../hire/hire.jsx";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home setActiveComponent={setActiveComponent} />;
      case "project":
        return <Project />;
      case "about":
        return <About />;
      case "hire":
        return <Hire />;
      default:
        return <Home setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <>
      <header>
        <p>&lt;Synapse Velocity /&gt;</p>
        <nav>
          <button
            onClick={() => setActiveComponent("home")}
            className={`nav-btn${activeComponent === "home" ? " active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveComponent("project")}
            className={`nav-btn${activeComponent === "project" ? " active" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveComponent("about")}
            className={`nav-btn${activeComponent === "about" ? " active" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveComponent("hire")}
            className={`nav-btn${activeComponent === "hire" ? " active" : ""}`}
          >
            Hire
          </button>
        </nav>
      </header>
      {renderComponent()}
    </>
  );
}
