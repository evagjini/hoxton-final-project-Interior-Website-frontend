import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category, User } from "../types";
type Props = {
  currentUser: User | null;
  signOutUser: () => void;
};

export function Header({ currentUser, signOutUser }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:5637/categories")
      .then((res) => res.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);
  return (
    <header>
      <h1 className="title text-center text-3xl shadow-orange-800 text-blue-600 font-sans font-bold">
        Seasons In Colour
      </h1>
      <ul>
        {currentUser ? (
          <>
            <Link to="/blog">
              <li className="text-1xl text-gray-800 font-sans bg-gradient-to-br ">
                Blog
              </li>
            </Link>

            <li>
              <div className="dropdown">
                <button className="dropbtn">Categories</button>

                <div className="dropdown-content">
                  {categories.map((category) => (
                    <Link to={`/categories/${category.id}`} key={category.id}>
                      {" "}
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* // <Link to={"/categories"}>
                //   <li className="text-1xl text-gray-800 font-sans bg-gradient-to-br">
                //     Categories
                //   </li>
                // </Link> */}
            <Link to={"/favorite"}>
              <li className="text-1xl text-gray-800 font-sans bg-gradient-to-br">
                Favorite
              </li>
            </Link>
            <li>
              <button
                className="text-1xl text-gray-800 font-sans bg-gradient-to-br"
                onClick={signOutUser}
              >
                LogOut
              </button>
            </li>
          </>
        ) : (
          <>
            <Link to={"/signIn"}>
              <li className="text-3xl text-gray-500 font-sans bg-gradient-to-br ">
                SignIn
              </li>
            </Link>
            <Link to={"/signUp"}>
              <li className="text-3xl text-gray-500 font-sans bg-gradient-to-br">
                SignUp
              </li>
            </Link>
          </>
        )}
      </ul>
    </header>
  );
}
