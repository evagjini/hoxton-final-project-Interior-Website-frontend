import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Blog, Favorite, User } from "../types";

type Props = {
  currentUser: User | null;
};
export function FavoriteDesign({ currentUser }: Props) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:5637/favorites/${currentUser.id}`)
        .then((res) => res.json())
        .then((favoritesFromServer) => {
          if (favoritesFromServer.error) {
            alert(favoritesFromServer.error);
          } else {
            setFavorites(favoritesFromServer);
          }
        });
    }
  }, []);
  return (
    <div>
      <h1 className="font-bold font-sans text-2xl  my-4">
        {" "}
        All Favorites of {currentUser?.name}
      </h1>
      <div className="flex justify-center border-2">
        <div>
          {
            <ul className="favorites-list">
              {favorites.map((favorite) => (
                <li className="favorites">
                  <h4>{favorite.blog.title}</h4>
                  <Link to={"/blogs/blog"}></Link>
                  {/* {favorite.blog.images.map((image) => (
                <img src={favorite.blog.image} alt="" />
              ))} */}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
}
