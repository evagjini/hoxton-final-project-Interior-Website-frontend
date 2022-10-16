import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Blog } from "../types";

export function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  function getBlogsFromServer() {
    fetch("http://localhost:5637/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }
  useEffect(() => {
    getBlogsFromServer();
  }, []);

  return (
    <div className="all-blogs">
      {blogs.map((blog) => (
        <Link to={`/home/${blog.id}`}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <div>
            {blog.images.map((image) => (
              <li>{blog.image}</li>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
