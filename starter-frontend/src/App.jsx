import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import "./styles/App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

