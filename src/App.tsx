import React from "react";
import "./App.css";
import Navbar from "./components/Sidebar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
