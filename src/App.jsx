import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Signup from "./components/Login/Signup/Signup";
import { AuthContextProvider } from "./Context/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ProtectedRoute from "./components/Login/ProtectedRoute/ProtectedRoute";
import ContactForm from "./components/Home/ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<ContactForm />} />
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard/appointment"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
