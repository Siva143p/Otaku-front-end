import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnime,
  removeAnime,
  selectSavedAnimes,
} from "./features/saveAnime/savedSlice";

function SaveAnime({ Anime, isClicked }) {
  const dispatch = useDispatch();
  const animes = useSelector(selectSavedAnimes);

  //   const isAnimeIN = animes.some((anime) => anime.id === Anime.id);

  //   isAnimeIN ? dispatch(removeAnime(Anime)) : dispatch(addAnime(Anime));

  //   const [isAnimeIN, setIsAnimeIN] = useState(false);

  return <>{false ? "Remove from Watchlist" : "Add to Watchlist"}</>;
}

export default SaveAnime;

// useEffect(() => {
//   const savedAnimes = JSON.parse(localStorage.getItem("SavedAnimes")) || [];
//   const isAnimeIn = savedAnimes.some(
//     (anime) => anime.filter_key === Anime.filter_key,
//   );

//   setIndicator(isAnimeIn);

//   if (isClicked) {
//     if (isAnimeIn) {
//       const updatedAnimes = savedAnimes.filter(
//         (anime) => anime.filter_key !== Anime.filter_key,
//       );
//       localStorage.setItem("SavedAnimes", JSON.stringify(updatedAnimes));
//       console.log("Anime removed:", Anime.title);
//     } else {
//       const updatedAnimes = [...savedAnimes, Anime];
//       localStorage.setItem("SavedAnimes", JSON.stringify(updatedAnimes));
//       console.log("Anime saved:", Anime.title);
//     }
//   }
// }, [isClicked, Anime]);
