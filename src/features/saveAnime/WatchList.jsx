import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedAnimes, removeAnime, selectSavedAnimes } from "./savedSlice";
import Filter from "../filter/Filter";
import { BsFilterLeft } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Sort from "../filter/Sort";
import { RiDeleteBin6Line } from "react-icons/ri";
import LikeButton from "./LikeButton";

function WatchList() {
  const [filterComp, setFilterComp] = useState(false);
  // Fetch filtered animes from Redux
  const animes = useSelector(selectSavedAnimes);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch saved animes when the component mounts
    dispatch(fetchSavedAnimes());
  }, [dispatch]);

  const deleteAnime = (anime) => {
    dispatch(removeAnime(anime));
  };

  const renderSavedAnimes = animes
    ? animes.map((anime) => (
        <div
          className="w-64 h-72 relative mb-3 mt-2 p-2 cursor-pointer hover:bg-gray-900"
          key={anime.id}
        >
          <div className="size-full h-2/4 mb-2">
            <img
              src={anime.thumb}
              alt={anime.title}
              className="size-full object-cover"
            />
          </div>

          <p className="m-0">{anime.title}</p>
          {anime.seasons ? (
            <p className="mt-1 text-sm font-thin text-neutral-400">
              Start Watch: {anime.seasons.no_of_seasons > 1 ? "S1 E1" : "E1"}
            </p>
          ) : (
            <p className="sv--card--Se--ep">Start to Watch</p>
          )}

          <div className="absolute bottom-0 left-0 p-2 flex justify-between w-full">
            <div className="sv--type">
              <span
                className="text-sm font-semibold"
                style={{ color: "rgb(36, 141, 141)" }}
              >
                {anime.type}
              </span>
              <span className="text-sm ml-2 text-neutral-400">
                {anime.dub ? "Sub | Dub" : "Subtitled"}
              </span>
            </div>

            <div>
              <LikeButton Anime={anime} />
              <RiDeleteBin6Line
                size={24}
                className="inline text-neutral-400 hover:text-white"
                onClick={() => deleteAnime(anime)}
              />
            </div>
          </div>
        </div>
      ))
    : "";

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-lg ml-1">Recent Activity</div>
        <div className="flex">
          <div className="text-base p-2 text-neutral-500 font-semibold cursor-pointer hover:text-white hover:bg-zinc-700">
            <BsFilterLeft size={26} className="inline" />
            SORT
          </div>
          <div
            className="text-base p-2 text-neutral-500 font-semibold cursor-pointer hover:text-white hover:bg-zinc-700 relative"
            onClick={() => setFilterComp(!filterComp)}
          >
            <TbAdjustmentsHorizontal size={25} className="inline" />
            FILTER
            {filterComp && <Filter Animes={animes} Page={"saved"} />}
          </div>
        </div>
      </div>

      <div className="size-full flex flex-wrap gap-2.5">
        {renderSavedAnimes}
      </div>
    </>
  );
}

export default WatchList;
