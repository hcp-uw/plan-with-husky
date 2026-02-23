import { useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Login />
      <Home />
    </>
  );
}

