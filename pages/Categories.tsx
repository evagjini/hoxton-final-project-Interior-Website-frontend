import React, { useEffect, useState } from "react";
import { Category } from "../types";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:5637/categories")
      .then((res) => res.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  });
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <h1>{category.name}</h1>
        ))}
      </ul>
    </div>
  );
}
