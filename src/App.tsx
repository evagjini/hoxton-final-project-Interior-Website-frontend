import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { Principal } from "../pages/Principal";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { User } from "../types";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  let navigate = useNavigate();

  function signInUser(data: any) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
    navigate("/");
  }

  function signOutUser() {
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate("/signIn");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:5637/validate`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signInUser(data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/signUp" element={<SignUp signInUser={signInUser} />} />
        <Route path="/signIn" element={<SignIn signInUser={signInUser} />} />
      </Routes>
    </div>
  );
}

export default App;
