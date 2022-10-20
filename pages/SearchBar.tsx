import React from "react";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBar({ setSearch }: Props) {
  return (
    <div className="flex items-center justify-center px-4 border-r ">
      <div className="md:flex-none w-96 order-2  sm:order-1 flex justify-center py-4 rounded-md ">
        <input
          className=" px-4 py-2 w-80"
          placeholder="Search for a blog..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
