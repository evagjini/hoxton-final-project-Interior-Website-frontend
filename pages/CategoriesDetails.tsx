import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Blog, Category } from "../types";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogCategory, setBlogCategory] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:5637/categories")
      .then((res) => res.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);
  return (
    <div className="categories">
      {categories.map((category) => (
        <>
          <div
            className="single-category"
            key={category.id}
            onClick={() => {
              fetch(`http://localhost:5637/blogsForCategory/${category.id}`)
                .then((res) => res.json())
                .then((data) => setBlogCategory(data));
            }}
          >
            <h3>{category.name}</h3>
          </div>
          <div className="categoriess">
            {blogCategory.map((blog) => (
              <>
                <Link to={`/blogs/${blog.id}`}>
                  <div>
                    <h1>{blog.categoryId}</h1>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
