import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import "../../Assets/css/Sort.css";

function Sort() {
  return (
    <div className="text-base p-2 text-neutral-500 font-semibold cursor-pointer hover:text-white hover:bg-zinc-700">
      <BsFilterLeft size={26} className="inline" />
      SORT
    </div>
  );
}

export default Sort;
