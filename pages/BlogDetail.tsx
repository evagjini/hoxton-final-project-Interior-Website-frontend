import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blog, Comment, Designer, User } from "../types";

type Props = {
  currentUser: User;
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
      <div className="details ">
        <h3 className="font-style: italic mb-10 mt-10 text-2xl font-mono text-blue-500">
          {singleBlog.title}
        </h3>

        <span>
          by {singleBlog.designer.name} {singleBlog.designer.lastName}
        </span>

        <p className=" bg-blend-lighten">
          {singleBlog.images.map((image) => (
            <>
              <>
                <div className="flex flex-row w-full space-x-24 mb-32">
                  <p className="content text-slate-700 text-start decoration-from-font font-serif w-full">
                    {image.description}
                  </p>

                  <img className="w-80 rounded-xl" src={image.image} alt="" />
                </div>
              </>
            </>
          ))}
        </p>
      </div>
      <div>
        <button
          className="like-button"
          onClick={() => {
            fetch(`http://localhost:5637/likeBlogs`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                //@ts-ignore
                userId: currentUser.id,
                blogId: singleBlog.id,
              }),
            })
              .then((resp) => resp.json())
              .then((blog) => setSingleBlog(blog));
          }}
        >
          💛 {singleBlog.likes.length} likes
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded"
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
            className="border py-2 px-3 text-grey-darkest mt-3 whitespace-normal bg-blue-50 border-none mr-2"
            type="text"
            name="comment"
            placeholder="Enter your comment ..."
          />

          <button
            className="bg-purple-300 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded border-none"
            onClick={() => {}}
          >
            Submit
          </button>
        </form>

        <div className=" space-x-4 text-sm text-gray-500">
          <div className="flex-none py-10">
            {/* <ul className=" text-center text-sm  font-medium font-serif border-l-slate-500"> */}
            All Comments :
            {singleBlog.comments.map((comment) => (
              <div className="border-l-rose-200">
                <h3 className="font-medium text-gray-900">
                  {comment.user.name}
                </h3>
                <div className="mt-4 text-gray-700 ">{comment.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
