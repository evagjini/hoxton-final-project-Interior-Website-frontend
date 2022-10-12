import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import { Principal } from "../pages/Principal";
import { SignUp } from "../pages/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
