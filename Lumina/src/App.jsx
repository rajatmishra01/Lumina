import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import CreateAccountPage from "./components/CreateAccountPage"; //  signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Default: login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<CreateAccountPage />} /> {/* signup */}
      </Routes>
    </Router>
 );
}

export default App;
