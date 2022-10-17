import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blog } from "../types";

export function BlogDetail() {
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  //   window.singleBlog = singleBlog;

  useEffect(() => {
    fetch(`http://localhost:5637/blog/${params.id}`)
      .then((res) => res.json())
      .then((blogsFromServer) => setSingleBlog(blogsFromServer));
  });

  if (singleBlog === null) return <h2>loading ...</h2>;

  return (
    <div>
      <h3>{singleBlog.title}</h3>
      <p>
        {singleBlog.images.map((image) => (
          <>
            <img src={image.image} alt="" />
            <p>{image.description}</p>
          </>
        ))}
      </p>
    </div>
  );
}
