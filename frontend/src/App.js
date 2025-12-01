import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./landing-page/signup/Signup.jsx";
import Login from "./landing-page/login/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
