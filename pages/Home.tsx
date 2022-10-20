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
      <div
        className="blogs background-image: linear-gradient(to top left, var(--tw-gradient-stops));
"
      >
        <div className="relative mx-auto max-w-9xl">
          <div className="mx-auto mt-10 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <div className="flex flex-col overflow-hidden rounded-lg border-2">
                <Link to={`/blog/${blog.id}`}>
                  <p className="py-2">
                    {new Date(blog.created_at).toUTCString()}
                  </p>

                  <img
                    className="h-60 w-full object-fit"
                    src={blog.images[0].image}
                    alt=""
                  />
                  <h1 className="py-3">{blog.title}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
