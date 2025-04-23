import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"
import LoginPage from "./pages/LoginPage"
import VerificationPage from "./pages/VerificationPage"
import HomePage from "./pages/HomePage"
import ComplaintPage from "./pages/ComplaintPage"
import TrackPage from "./pages/TrackPage"
import ProfilePage from "./pages/ProfilePage"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
