import React from "react";
// import "./Assets/css/BrowseDropdown.css";
import {
  BrowseDropDownList1,
  BrowseDropDownList2,
  BrowseDropDownList3,
  BrowseDropDownList4,
} from "../NavItems";
// import { BrowseDropDownList1 } from "../NavItems";
import { Link } from "react-router-dom";

function BrowseDropdown() {
  return (
    <div
      className="bg-neutral-800 absolute flex text-left left-0 z-10"
      style={{ top: "3.7rem" }}
    >
      <div className="border-r-2 border-neutral-600">
        <ul className="p-0">
          {BrowseDropDownList1.map((item) => {
            return (
              <li key={item.id} className="w-56">
                <Link
                  to={item.path}
                  state={{ category: item.data, Quote: item.quote }}
                  className="block size-full py-2.5 pl-4 text-white no-underline text-sm font-medium hover:bg-zinc-700"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="pl-3 text-gray-400 text-xs">GENRES</p>
        <div className="flex">
          <ul className="p-0">
            {BrowseDropDownList2.map((item) => {
              return (
                <li key={item.id} className="w-56">
                  <Link
                    to={item.path}
                    state={{ category: item.data, Quote: item.quote }}
                    className="block size-full py-2.5 pl-4 text-white no-underline text-sm font-medium hover:bg-zinc-700"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="p-0">
            {BrowseDropDownList3.map((item) => {
              return (
                <li key={item.id} className="w-56">
                  <Link
                    to={item.path}
                    state={{ category: item.data, Quote: item.quote }}
                    className="block size-full py-2.5 pl-4 text-white no-underline text-sm font-medium hover:bg-zinc-700"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="p-0">
            {BrowseDropDownList4.map((item) => {
              return (
                <li key={item.id} className="w-56">
                  <Link
                    to={item.path}
                    state={{ category: item.data, Quote: item.quote }}
                    className="block size-full py-2.5 pl-4 text-white no-underline text-sm font-medium hover:bg-zinc-700"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrowseDropdown;
