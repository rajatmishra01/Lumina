import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage"; //  signup page
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import BMIPage from "./pages/BMI";
import HealthReport from "./pages/HealthReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Default: login */}
        <Route path="/signup" element={<CreateAccountPage />} /> {/* signup */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="/health-report" element={<HealthReport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
