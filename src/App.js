import React from "react";
import "./app.css";
import About from "./Components/About Section/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home Section/Home";
import Skill from "./Components/Skills Section/Skill";
import Project from "./Components/Projects Section/Project";
import Contact from "./Components/Contact Section/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
