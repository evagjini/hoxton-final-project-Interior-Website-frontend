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
    <main>
      <div className="all-blogs">
        {blogs.map((blog) => (
          <Link to={`/home/${blog.id}`}>
            <div className="blog">
              <h1>{blog.title}</h1>
              <img src={blog.images} alt="" />
              <p>{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
