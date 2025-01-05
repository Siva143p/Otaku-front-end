import React from "react";
import { IoMdClose } from "react-icons/io";

function ErrorComponent({ errorMsg, active }) {
  return (
    <div className="bg-red-500 w-screen h-14 absolute top-0 z-50 flex justify-center items-center text-lg font-semibold">
      {errorMsg}
      <span
        className="absolute right-0 h-full px-3 pt-3 hover:bg-red-400 cursor-pointer"
        onClick={() => active(false)}
      >
        <IoMdClose size={24} />
      </span>
    </div>
  );
}

export default ErrorComponent;
