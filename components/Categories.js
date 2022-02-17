import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import Link from "next/link";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="pt-8 flex justify-center uppercase dark:text-white">
      <span className="pr-4 font-bold">Categories: </span>
      <ul className="flex gap-x-4">
        {categories
          ? categories.map((category) => {
              return (
                <li key={category.name}>
                  <Link href={`kategori/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })
          : "Yükleniyor..."}
      </ul>
    </div>
  );
};

export default Categories;
