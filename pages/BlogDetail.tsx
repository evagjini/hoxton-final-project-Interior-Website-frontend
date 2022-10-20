import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blog, Comment, Designer, User } from "../types";

type Props = {
  currentUser: User | null;
};
export function BlogDetail({ currentUser }: Props) {
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);
  const [designers, setDesigners] = useState<Designer[]>([]);
  // const [comments, setComments] = useState([]);

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
    fetch(`http://localhost:5637/designers}`)
      .then((res) => res.json())
      .then((designersFromServer) => setDesigners(designersFromServer));
  }, []);

  if (singleBlog === null) return <h2>loading ...</h2>;

  return (
    <>
      <div>
        <h3>{singleBlog.title}</h3>

        {designers.map((designer) => (
          <span>{designer.name}</span>
        ))}

        <p>
          {singleBlog.images.map((image) => (
            <>
              <>
                <img src={image.image} alt="" />
                <p>{image.description}</p>
              </>
            </>
          ))}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            fetch("http://localhost:5637/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: currentUser?.id,
                blogId: singleBlog.id,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.error) {
                  console.log(data.error);
                }
              });
          }}
        >
          Favorite
        </button>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            let newComment = {
              userId: currentUser?.id,
              blogId: singleBlog.id,
              // @ts-ignore
              comment: event.target.comment.value,
            };
            fetch(`http://localhost:5637/comments`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newComment),
            })
              .then((res) => res.json())
              .then((blog) => {
                setSingleBlog(blog);
              });
            // @ts-ignore
            event.target.reset();
          }}
        >
          <input
            type="text"
            name="comment"
            placeholder="Enter your comment ..."
          />

          <button onClick={() => {}}>Submit</button>
        </form>

        <div className="comment"></div>
        <ul className="comment-list">
          All Comments :
          {singleBlog.comments.map((comment) => (
            <li className="single-comment">
              <h3>{comment.user.name}</h3>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
