import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { Principal } from "../pages/Principal";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { BlogDetail } from "../pages/BlogDetail";
import { Home } from "../pages/Home";
import { Designer, User } from "../types";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentDesigner, setCurrentDesigner] = useState<Designer | null>(null);

  let navigate = useNavigate();

  function signInUser(data: any) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
    navigate("/home");
  }
  function signInDesigner(data: any) {
    setCurrentDesigner(data.designer);
    localStorage.token = data.token;
    // navigate("/blog");
  }

  function signOutUser() {
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate("/signIn");
  }

  useEffect(() => {
    if (localStorage.token) {
      if (localStorage.user === "user")
        fetch(`http://localhost:5637/validate/user`, {
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
    } else
      fetch(`http://localhost:5637/validate/designer`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signInDesigner(data);
          }
          console.log(data);
        });
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} signOutUser={signOutUser} />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/signUp" element={<SignUp signInUser={signInUser} />} />
        <Route
          path="/signIn"
          element={
            <SignIn signInUser={signInUser} signInDesigner={signInDesigner} />
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
