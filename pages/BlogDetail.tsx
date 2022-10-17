import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blog, Designer } from "../types";

export function BlogDetail() {
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);
  const [designer, setDesigner] = useState<Designer[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  //@ts-ignore
  window.singleBlog = singleBlog;

  useEffect(() => {
    fetch(`http://localhost:5637/blog/${params.id}`)
      .then((res) => res.json())
      .then((blogsFromServer) => setSingleBlog(blogsFromServer));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5637/designers/${params.id}`)
      .then((res) => res.json())
      .then((blogsFromServer) => setSingleBlog(blogsFromServer));
  }, []);

  if (singleBlog === null) return <h2>loading ...</h2>;

  return (
    <div>
      <h3>{singleBlog.title}</h3>

      <p>
        {singleBlog.images.map((image) => (
          <>
            <>
              <img src={image.image} alt="" />
              <p>{image.description}</p>
            </>
            {} [singleBlog.designer]
          </>
        ))}
      </p>
    </div>
  );
}

//  I should get an designer by id cause I don't have it
