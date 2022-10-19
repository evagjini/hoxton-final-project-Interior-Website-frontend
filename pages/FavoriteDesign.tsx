import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Blog, Favorite, User } from "../types";

type Props = {
  currentUser: User | null;
  blog: Blog;
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
      <h1> All Favorites of {currentUser?.name}</h1>
      {
        <ul className="favorites-list">
          {favorites.map((favorite) => (
            <li className="favorites">
              <h4>{favorite.blog.title}</h4>
              <Link to={"/blogs/"}></Link>
              {/* {favorite.blog.images.map((image) => (
                <img src={favorite.blog.image} alt="" />
              ))} */}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
