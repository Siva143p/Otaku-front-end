import React, { useState } from "react";
import { GrBookmark } from "react-icons/gr";
import { SavedPageNav } from "../navigations/NavItems";

// import "../../css/SavedList.css";
import { Link } from "react-router-dom";

import WatchList from "./WatchList";

function SavedList() {
  const [watchList, setWatchList] = useState(true);
  const [otakuList, setOtakuList] = useState(false);
  const [history, setHistory] = useState(false);

  const setComponents = (item) => {
    console.log("setComponet called!", item);

    if (item === "WATCHLIST") {
      setWatchList(true);
      setOtakuList(false);
      setHistory(false);
      console.log(watchList);
    } else if (item === "OTAKULIST") {
      setOtakuList(true);
      setHistory(false);
      setWatchList(false);
    } else if (item === "HISTORY") {
      setOtakuList(false);
      setHistory(true);
      setWatchList(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-12 text-white">
      <h3 className="text-center text-3xl font-semibold mt-14">
        <GrBookmark size={28} className="inline mb-1 mr-3 font-bold" />
        My Lists
      </h3>

      <div className="my-5 border-b-2 border-b-gray-500">
        <ul className="w-2/4 flex mx-auto content-around my-0 p-0">
          {SavedPageNav.map((item) => {
            return (
              <li
                className="text-gray-400 py-3 px-12 hover:bg-slate-900 hover:text-white cursor-pointer font-semibold text-sm"
                key={item.id}
                onClick={() => setComponents(item.title)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="size-full">{watchList && <WatchList />}</div>
    </div>
  );
}

export default SavedList;
