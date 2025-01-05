import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { PiCrownSimpleBold } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";
import { ul1, ul2, ul3 } from "./userOptionsData";
import { Link } from "react-router-dom";

function UserOptions() {
  const [isClicked, setIsClicked] = useState(false);
  const createList = (list) => {
    return list.map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          className="flex pl-5 py-3 hover:bg-zinc-700 cursor-pointer no-underline text-white"
          onClick={() => setIsClicked(!isClicked)}
        >
          {item.icon}
          <span className="ml-4 text-base">{item.pName}</span>
        </Link>
      </li>
    ));
  };

  return (
    <div
      className={
        isClicked ? "hidden" : "w-full absolute z-40 top-16 text-white"
      }
      style={{
        height: "calc(100vh - 64px)",
        background:
          "linear-gradient(to right, rgba(122, 122, 122, 0.541), rgba(122, 122, 122, 0.541))",
      }}
    >
      <div className="w-96 bg-zinc-900 absolute right-0 h-full max-sm:w-full">
        <div className="overflow-y-scroll h-full">
          <section
            className="w-full py-2"
            style={{ borderBottom: "0.5px solid rgb(73, 73, 73)" }}
          >
            <div className="w-full flex items-center hover:bg-zinc-700 cursor-pointer py-2 pl-4 relative">
              <div className="w-14 h-14 rounded-full">
                <img
                  src="https://m.media-amazon.com/images/I/51heb6a2SdL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="ml-5 text-lg font-semibold pt-3">Eren</p>
              <BsPencil size={20} className="-rotate-12 absolute right-4" />
            </div>

            <div className="w-11/12 bg-yellow-500 text-black text-center py-2 mx-auto my-3 hover:bg-yellow-400 cursor-pointer">
              <PiCrownSimpleBold size={20} className="inline" />
              7-DAY FREE TRIAL
            </div>
          </section>

          <ul
            className="m-0 p-0 py-2 border-y-neutral-500"
            style={{ borderBottom: "0.5px solid rgb(73, 73, 73)" }}
          >
            {createList(ul1)}
          </ul>

          <ul
            className="m-0 p-0 py-2 border-y-neutral-500"
            style={{ borderBottom: "0.5px solid rgb(73, 73, 73)" }}
          >
            {createList(ul2)}
          </ul>

          <ul
            className="m-0 p-0 py-2 border-y-neutral-500"
            style={{ borderBottom: "0.5px solid rgb(73, 73, 73)" }}
          >
            {createList(ul3)}
          </ul>

          <ul
            className="m-0 p-0 py-2 bg-zinc-900 border-y-neutral-500 sticky bottom-0"
            style={{ borderTop: "0.5px solid rgb(73, 73, 73)" }}
          >
            <li className="flex pl-5 py-4 hover:bg-zinc-700 cursor-pointer">
              <GrLogout size={24} />
              <span className="ml-4 text-base">Log Out</span>
            </li>
          </ul>
        </div>
        {/* 
        <div className="w-96 bg-zinc-900 absolute right-0 bottom-0">
          <GrLogout size={23} />
          Log Out
        </div> */}
      </div>
    </div>
  );
}

export default UserOptions;
