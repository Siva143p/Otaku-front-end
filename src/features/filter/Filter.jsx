import React, { useState, useEffect } from "react";
import "../../Assets/css/Filter.css";
import { filterItemsLang, filterItemsMedia } from "./fiterDropdownItems";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredAnimes,
  selectFilterLang,
  selectFilterMedia,
  setFilterKey,
} from "./filterSlice";

import {
  fetchAnimesByAlphabet,
  // fetchSavedAnimes,
  fetchPopularAnimes,
} from "./filterSlice";
import {
  fetchSavedAnimes,
  savedLang,
  selectSavedLang,
  selectSavedMedia,
  setFilterObj,
} from "../saveAnime/savedSlice";

function Filter({ Page }) {
  const lang = useSelector(selectFilterLang);
  const media = useSelector(selectFilterMedia);
  const savedLang = JSON.parse(localStorage.getItem("FilterObj"))?.lang;
  const savedMedia = JSON.parse(localStorage.getItem("FilterObj"))?.media;
  const animes = useSelector(selectFilteredAnimes);
  const [filterLang, setFilterLang] = useState(lang);
  const [filterMedia, setFilterMedia] = useState(media);
  const [Lang, setLang] = useState(savedLang);
  const [Media, setMedia] = useState(savedMedia);
  const dispatch = useDispatch();

  console.log("saved Media", savedMedia);

  useEffect(() => {
    if (Page === "Alphabetical") {
      dispatch(fetchAnimesByAlphabet());
    } else if (Page === "saved") {
      dispatch(fetchSavedAnimes());
    } else if (Page === "popular") {
      dispatch(fetchPopularAnimes());
    }
  }, [dispatch, Page]);

  const handleFilterLang = (type) => {
    if (Page === "saved") {
      // Dispatch filter changes to savedSlice
      dispatch(setFilterObj({ lang: type, media: savedMedia }));
      setLang(type);
    } else {
      dispatch(setFilterKey({ lang: type, media: filterMedia, page: Page }));
      setFilterLang(type);
    }
  };

  const handleFilterMedia = (type) => {
    if (Page === "saved") {
      dispatch(setFilterObj({ lang: savedLang, media: type }));
      setMedia(type);
    } else {
      dispatch(setFilterKey({ lang: filterLang, media: type, page: Page }));
      setFilterMedia(type);
    }
  };

  return (
    <div className="bg-gray-700 w-48 absolute top-11 left-0 z-50">
      {/* Language Filter */}
      <ul className="p-0">
        <span className="font-semibold text-lg text-white ml-4">Language</span>
        {filterItemsLang.map((item) => (
          <li
            key={item.id}
            className={
              filterLang !== item.type
                ? "pl-4 pr-20 py-2 hover:bg-gray-800 text-gray-500 hover:text-white cursor-pointer"
                : "pl-4 pr-20 py-2 hover:bg-gray-800 text-white cursor-pointer"
            }
            onClick={() => handleFilterLang(item.type)}
          >
            {console.log(
              "logging : ",
              Page === "saved" ? item.type === Media : item.type === filterMedia
            )}
            <input
              type="radio"
              className="mr-2 text-transparent"
              checked={
                Page === "saved" ? item.type === Lang : item.type === filterLang
              }
              readOnly
            />
            {item.title}
          </li>
        ))}
      </ul>

      {/* Media Filter */}
      <ul className="p-0">
        <span className="font-semibold text-lg text-white ml-4">Media</span>
        {filterItemsMedia.map((item) => (
          <li
            key={item.id}
            className={
              filterMedia !== item.type
                ? "pl-4 pr-20 py-2 hover:bg-gray-800 text-gray-500 hover:text-white cursor-pointer"
                : "pl-4 pr-20 py-2 hover:bg-gray-800 text-white cursor-pointer"
            }
            onClick={() => handleFilterMedia(item.type)}
          >
            <input
              type="radio"
              className="mr-2 text-transparent"
              checked={
                Page === "saved"
                  ? item.type === Media
                  : item.type === filterMedia
              }
              readOnly
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
