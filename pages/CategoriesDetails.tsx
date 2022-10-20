import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogCategory } from "../Components/BlogCategory";
import { Header } from "../Components/Header";
import { Blog, Category, User } from "../types";
// type Props = {
//   currentUser: User;
//   signOutUser: () => void;
// };
export function CategoriesDetails() {
  const [category, setCategory] = useState<Category | null>(null);

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5637/categories/${params.id}`)
      .then((resp) => resp.json())
      .then((categoryFromServer) => setCategory(categoryFromServer));
  }, []);
  if (category === null) return <h1>Loading... </h1>;

  return (
    <div>
      <h1 className="my-12 text-2xl font-bold">{category.name}</h1>

      <div className="grid grid-cols-3 gap-x-4">
        {category.blogs.map((blog: Blog) => (
          <>
            <div className="flex flex-col justify-center items-center border-2 p-6 rounded-xl">
              <Link to={`/blogs/${blog.id}`}></Link>

              <h3>{blog.title}</h3>
              <img
                className="w-32 rounded"
                src={blog.images[0].image}
                alt=""
                key={category.id}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
