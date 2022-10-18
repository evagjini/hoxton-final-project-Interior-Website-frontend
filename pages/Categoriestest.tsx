// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Category } from "../types";

// export function Categories() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5637/categories")
//       .then((res) => res.json())
//       .then((categoriesFromServer) => setCategories(categoriesFromServer));
//   });
//   return (
//     <div>
//       <ul>
//         {categories.map((category) => (
//           <>
//             <li key={category.id}>
//               <Link to={`/categories/${category.id}`}> {category.name}</Link>
//             </li>
//           </>
//         ))}
//       </ul>
//     </div>
//   );
// }
