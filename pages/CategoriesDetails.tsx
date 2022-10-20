import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogCategory } from "../Components/BlogCategory";
import { Header } from "../Components/Header";
import { Blog, Category, User } from "../types";
// type Props = {
//   currentUser: User;
//   signOutUser: () => void;
// };
export function Categories() {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogCategory, setBlogCategory] = useState<Blog[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:5637/categories")
      .then((res) => res.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5637/blogs?categoryId=${params.id}`)
  //     .then((resp) => resp.json())
  //     .then((blogsFromServer) => setBlogs(blogsFromServer));
  // }, []);

  return (
    <div className="categories">
      {/* <Header currentUser={currentUser} signOutUser={signOutUser} />{" "} */}
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
            <button>{category.name}</button>
          </div>
          <div className="categoriess">
            {blogCategory?.map((blog) => (
              <>
                <BlogCategory blog={blog} />
              </>
            ))}
          </div>
        </>
      ))}
    </div>

    // <div>
    //   <ul>
    //     {categories.map((category) => (
    //       <li key={category.id}>
    //         <Link to={`/categories/${category.id}`}>{category.name}</Link>
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="flowers-wraper">
    //     <ul className="flowers-list">
    //       {blogs.map((blog) => (
    //         <li>
    //           <Link to={`/blogs/${blog.id}`}>
    //             <article className="blog-item">
    //               <img src={blog.image} alt={blog.title} />
    //               <h3 className="blog-title">{blog.title}</h3>
    //             </article>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

//
//   return (
//
//   );
// }
