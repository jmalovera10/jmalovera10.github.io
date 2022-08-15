import React from "react";
import "./App.css";
import Navbar from "./components/Sidebar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import JobExperience from "./components/JobExperience";

function App() {
  return (
    <div>
      <Navbar />
      <Skills />
      <JobExperience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
