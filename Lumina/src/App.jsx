import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage"; // signup page
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import BMIPage from "./pages/BMI";
import HealthReport from "./pages/HealthReport";
import SettingsPage from "./pages/settingsPage";
import PreferencesPage from "./pages/preferencesPage";
import PaymentsActivity from "./pages/PaymentActivityPage";
import SupportDataPage from "./pages/SupportDataPage"; // ✅ new import
import MessagesPage from "./pages/MessagesPage"; // ✅ new import
import NearMePage from "./pages/NearMePage"; // ✅ new import
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
          <Route path="/near" element={<NearMePage />} />
          <Route path="/message" element={<MessagesPage />} /> {/* ✅ new route */}
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/support" element={<SupportDataPage />} /> {/* ✅ updated */}
          <Route path="/settings/preferences" element={<PreferencesPage />} />
          <Route path="/settings/payments" element={<PaymentsActivity />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
