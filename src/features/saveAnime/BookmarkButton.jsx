import React, { useState } from "react";
import { GrBookmark } from "react-icons/gr";
import { RiBookmarkFill } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";

import "../../Assets/css/BookmarkButton.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnime,
  isAnimeExists,
  removeAnime,
  selectSavedAnimes,
} from "./savedSlice";

function BookmarkButton({ page, size, Anime }) {
  //   const [value, setValue] = useState(false);
  const dispatch = useDispatch();
  // const animes = useSelector(selectSavedAnimes);
  const isAnimeIN = useSelector((state) => isAnimeExists(state, Anime.id));

  const handleSaveAnime = () => {
    isAnimeIN ? dispatch(removeAnime(Anime)) : dispatch(addAnime(Anime));
  };

  return (
    <button
      className={
        page !== "home--carou"
          ? "bookmar--btn--product bookmar--btn"
          : "bookmar--btn--carousel bookmar--btn"
      }
      id={
        page === "search" || page === "animeRecommendation" || page === "Browse"
          ? "for--org--bookmark"
          : ""
      }
      onClick={() => handleSaveAnime()}
    >
      {isAnimeIN ? (
        <RiBookmarkFill size={size} className="inline" />
      ) : (
        <RiBookmarkLine size={size} className="inline" />
      )}
      <p className="hover--btn">
        {isAnimeIN ? "Remove from Watchlist" : "Add to Watchlist"}
      </p>
    </button>
  );
}

export default BookmarkButton;
