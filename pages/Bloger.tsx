import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Designer } from "../types";
type Props = {
  currentDesigner: Designer;
};

export function Bloger({ currentDesigner }: Props) {
  const [blogs, setBlogs] = useState<Designer[]>([]);
  if (currentDesigner === null) return <h1>loading...</h1>;
  return (
    <form
      className="create-post"
      onSubmit={(event) => {
        event.preventDefault();
        fetch("http://localhost:5637/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // @ts-ignore
            title: event.target.title.value,
            image: event.target.image.value,
            designerId: currentDesigner.id,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => setBlogs(data));
        // @ts-ignore
        event.target.reset();
      }}
    >
      <p>Hello {currentDesigner.name}!</p>

      <textarea name="text" placeholder="Share your Design.."></textarea>
      <input
        className="input-email"
        name="image"
        placeholder="Add an image url"
      ></input>
      <button onClick={() => {}}>Add a Design</button>
    </form>
  );
}

// type Props = {
//   currentDesigner: Designer;
// };
// export function Bloger({ currentDesigner }: Props) {
//   const [designers, setDesigners] = useState<Designer[]>([]);
//   const params = useParams()

//   useEffect(() => {
//     fetch(`http://localhost:5637/designer/${params.id}`)
//       .then((res) => res.json())
//       .then((designersFromServer) => setDesigners(designersFromServer));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {designers.map((designer) => (
//           <h3> Hello ,{designer.}</h3>
//         ))}
//       </ul>
//     </div>
//   );
// }
