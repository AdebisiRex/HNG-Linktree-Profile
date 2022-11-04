import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
