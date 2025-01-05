import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/css/Search.css";
import { CiBookmark } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import BookmarkButton from "./features/saveAnime/BookmarkButton";

// import { doubleMetaphone } from "double-metaphone";
// import Fuse from "fuse.js";

function Search({ AnimeData }) {
  const [value, setValue] = useState("");
  const [Animes, setAnime] = useState([]);

  const searchAnime = async (input) => {
    try {
      setAnime([]);
      setValue(input);
      const url = `http://localhost:5500/api/findAnime/${input}`;
      const respose = await fetch(url);
      const result = await respose.json();
      setAnime(result);
      console.log(result);

      if (!respose.ok) {
        setAnime([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  let a = [];

  AnimeData.map((anime) => {
    return value && anime.filter_key.toLowerCase().includes(value.toLowerCase())
      ? a.push(anime)
      : "";
  });

  // console.log(a);

  return (
    <div>
      <div className="search--bar">
        <input
          type="text"
          value={value}
          onChange={(e) => searchAnime(e.target.value)}
        />
        <span className="clear---search" onClick={() => setValue("")}>
          X
        </span>
      </div>

      <div className="search--results--section">
        {Animes.length > 0 &&
          Animes.map((anime) => {
            return (
              <Link
                to="/stream"
                state={{ Anime: anime }}
                className="searched--card"
              >
                <div className="search--card--content">
                  <p className="search--card--title">{anime.title}</p>
                  <p className="rating">
                    {anime.IMDB_rating}
                    <MdOutlineStar size={18} className="star inline" />
                  </p>
                  {anime.seasons ? (
                    <>
                      <p className="eps--S">
                        {anime.seasons.no_of_seasons} Seasons
                      </p>
                      <p className="eps--S">
                        {anime.seasons.no_of_episodes} Episodes
                      </p>
                    </>
                  ) : (
                    ""
                  )}

                  <p className="synopsis">
                    {anime.synopsis.substring(0, 200) + ".."}
                  </p>

                  <div className="search--card--btns">
                    <IoPlayOutline size={24} />
                    <BookmarkButton size={22} Anime={anime} page={"search"} />
                  </div>
                </div>

                <div className="searched--card--img">
                  <img src={anime.thumb} alt="" />
                </div>

                <p className="search--card--title">{anime.title}</p>
                <p className="sub--dub">
                  {anime.dub ? "Sub | Dub" : "Subtitled"}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
