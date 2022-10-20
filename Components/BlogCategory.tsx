import React from "react";
import { Link } from "react-router-dom";
import { Blog } from "../types";
type Props = {
  blog: Blog;
};
export function BlogCategory({ blog }: Props) {
  return (
    <div>
      <Link to={`/blogs/${blog.id}`}></Link>
      <div className="categoryBlog" key={blog.id}></div>
      <div>
        {blog.images?.map((image) => (
          <>
            <img src={image.image} alt="" />
            <h3>{image.description}</h3>
          </>
        ))}

        <h3>{blog.title}</h3>
      </div>
    </div>
  );
}
