import React from "react";
import { useEffect, useState } from "react";
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
      <h1> All Favorites </h1>
      <ul className="favorites-list">
        {favorites.reverse().map((favorite) => (
          <li key={favorite.id} className="favorites">
            {/* {favorite.blog.images.map((image) => (
              <img src={favorite.blog.image} alt="" />
            ))} */}
            {/* <img src={favorite.blog.image} alt="" />
            <p>{favorite.user.name}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
