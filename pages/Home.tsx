import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Blog } from "../types";
import { SearchBar } from "./SearchBar";

export function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");

  function getBlogsFromServer() {
    fetch("http://localhost:5637/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }
  useEffect(() => {
    getBlogsFromServer();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <div className="all-blogs">
        {filteredBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`}>
            <span>{blog.created_at}</span>

            <img src={blog.images[0].image} alt="" />
            <h1>{blog.title}</h1>
          </Link>
        ))}
      </div>
    </>
  );
}
