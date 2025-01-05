import React, { useState } from "react";
import { CiBookmark, CiPlay1 } from "react-icons/ci";
import { LuPlay } from "react-icons/lu";
// import "./Assets/css/AnimeRecommendation.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnime,
  removeAnime,
  isAnimeExists,
} from "./features/saveAnime/savedSlice";
import BookmarkButton from "./features/saveAnime/BookmarkButton";

function AnimeRecommendation({ anime }) {
  console.log("Anime Poster : ", anime);
  const [shwrmvBtn, setShwrmvBtn] = useState(false);
  let btnText = "";
  const dispatch = useDispatch();
  const isAnimeIN = useSelector((state) => isAnimeExists(state, anime.id));

  if (isAnimeIN && shwrmvBtn) {
    btnText = "REMOVE";
  } else if (isAnimeIN) {
    btnText = "IN WATCHLIST";
  } else {
    btnText = "ADD TO WATCHLIST";
  }

  return (
    <div className="max-w-7xl h-96 my-6 mx-auto flex flex-col sm:flex-row">
      <Link
        to="/stream"
        className="sm:w-5/12 w-full sm:h-full h-2/3"
        state={{ Anime: anime }}
      >
        <img src={anime.thumb} alt="" className="size-full object-cover" />
      </Link>
      <div className="sm:w-7/12 w-full h-full text-white sm:py-24 sm:mt-0 mt-4 px-6 relative">
        <Link
          to="/stream"
          className="text-2xl font-bold text-white no-underline hover:underline"
          state={{ Anime: anime }}
        >
          {anime.title}
        </Link>
        <p className="font-semibold" style={{ color: "rgb(36, 141, 141)" }}>
          {anime.type === "Series" ? "Series" : "Movie"}
          <span className="text-neutral-500 font-semibold ml-2">
            {anime.dub ? "Sub | Dub" : "Sub"}
          </span>
        </p>
        <p>{anime.synopsis.substring(0, 200) + "..."}</p>

        <Link to="/stream" state={{ Anime: anime }}>
          <button className="border-none font-semibold text-black bg-orange-600 py-2 text-center items-center mr-2.5 lg:w-5/12 w-full md:mb-2">
            <LuPlay size={24} className="inline mb-0.5" />
            START WATCHING E1
          </button>
        </Link>

        <button
          className={
            isAnimeIN
              ? "border-orange-600 border-2 text-orange-600 font-semibold py-2 text-center lg:w-5/12 w-full sm:inline hidden"
              : "border-orange-600 border-2 text-orange-600 font-semibold py-2 text-center lg:w-5/12 w-full sm:inline hidden"
          }
          onClick={() =>
            isAnimeIN ? dispatch(removeAnime(anime)) : dispatch(addAnime(anime))
          }
          onMouseEnter={() => setShwrmvBtn(true)}
          onMouseLeave={() => setShwrmvBtn(false)}
        >
          <span className="ani--recom--bkmrk">
            <BookmarkButton
              Anime={anime}
              page={"animeRecommendation"}
              size={20}
            />
          </span>

          {/* {isAnimeIN ? "IN WATCHLIST" : "ADD TO WATCHLIST"} */}
          {btnText}
        </button>

        <div className="absolute right-3 top-12 sm:hidden">
          <BookmarkButton
            Anime={anime}
            page={"animeRecommendation"}
            size={24}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimeRecommendation;
