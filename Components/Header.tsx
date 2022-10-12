import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1 className="title">Seasons In Colour</h1>
      <ul>
        <Link to="/home">
          <li className="lists">Home</li>
        </Link>
        <Link to={"/blog"}>
          <li className="lists">Blog</li>
        </Link>
        <Link to={"/favorite"}>
          <li className="lists">Favorite</li>
        </Link>
        <Link to={"/signIn"}>
          <li className="lists">SignIn</li>
        </Link>
        <Link to={"/signUp"}>
          <li className="lists">SignUp</li>
        </Link>
      </ul>
    </header>
  );
}
