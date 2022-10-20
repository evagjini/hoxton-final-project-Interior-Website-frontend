// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Designer } from "../types";

type Props = {
  currentDesigner: Designer;
};

export function Bloger({ currentDesigner }: Props) {
  return (
    <div>
      <h1>Hello I am {currentDesigner.name}</h1>
      <img
        className="flex flex-col"
        src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={300}
        alt=""
      />
      <p>
        Join me In the jouney of designing your Interior Spaces ! Designing for
        me it's a passion that fullfills me ! Welcome and enjoy my blogs!
      </p>
    </div>
  );
}
// export function Bloger() {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState("");
//   const [created_at, setCreated_at] = useState("");
//   return <div></div>;
// }
//   function createNewDesign() {
//     let newDesign = {
//       title: title,
//       category: category,
//       images: images,
//       created_at: created_at,
//     };

//     fetch("http://localhost:5637/blogs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newDesign),
//     })
//       .then((res) => res.json())
//       .then((newJob) => {
//         setDesign([...designs, newDesign]);
//       });
//   }

//   const handleTitleChange = (e: any) => {
//     setTitle(e.target.value);
//   };

//   const handleCategoryChange = (e: any) => {
//     setCategory(e.target.value);
//   };

//   const handleImagesChange = (e: any) => {
//     setImages(e.target.value);
//   };

//   const handleCreated_at = (e: any) => {
//     setCreated_at(e.target.value);
//   };

//   };

//   return (
//     <form
//       className="design-form"
//       onSubmit={(event) => {
//         event.preventDefault();
//         createNewDesign();
//         //@ts-ignore
//         event.target.reset();
//       }}
//     >
//       <input
//         type="url"
//         name="logo"
//         placeholder="Department logo"
//         required
//         onChange={(e) => {
//           handleChange(e);
//         }}
//       />
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         required
//         onChange={(e) => {
//           handleTitleChange(e);
//         }}
//       />
//       <input
//         type="text"
//         name="role"
//         placeholder="Role"
//         required
//         onChange={(e) => {
//           handleRoleChange(e);
//         }}
//       />
//       <input
//         type="text"
//         name="level"
//         placeholder="Level"
//         required
//         onChange={(e) => {
//           handleLevelChange(e);
//         }}
//       />
//       <input
//         type="text"
//         name="contract"
//         placeholder="Contract"
//         required
//         onChange={(e) => {
//           handleContractChange(e);
//         }}
//       />

//       <Button variant="logIn">Add Job</Button>
//     </form>
//   );
// }
// function createNewDesign() {
//   throw new Error("Function not implemented.");
// }

// function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
//   throw new Error("Function not implemented.");
// }
