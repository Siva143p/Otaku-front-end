import React from "react";
import { RiBookmarkFill } from "react-icons/ri";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { useSelector } from "react-redux";
import BookmarkButton from "./features/saveAnime/BookmarkButton";
import { isAnimeExists } from "./features/saveAnime/savedSlice";

function AnimeCard({ anime, wordLimit }) {
  const isAnimeIn = useSelector((state) => isAnimeExists(state, anime.id));
  return (
    <div className="Product--card">
      <div className="img--div">
        <img src={anime.thumb} alt="" />
      </div>
      {isAnimeIn ? (
        <div className="is--saved">
          <RiBookmarkFill size={14} className="is-saved--bkmrk" />
        </div>
      ) : (
        ""
      )}
      <div className="anime--card--content">
        <p id="anime--card--ttl">{anime.title}</p>

        {anime.type === "Movie" ? (
          <p id="anime--card--rating">
            {anime.IMDB_rating}
            <MdOutlineStar className="inline" />
          </p>
        ) : (
          ""
        )}
        {anime.seasons ? (
          <div className="card--eps--seasons">
            <p id="anime--card--rating">
              {anime.IMDB_rating}
              <MdOutlineStar className="inline" />
            </p>
            <p>{anime.seasons.no_of_seasons} Seasons</p>
            <p>{anime.seasons.no_of_episodes} Episodes</p>
          </div>
        ) : null}
        <div className="card--synopsis">
          <p>{anime.synopsis.substring(0, wordLimit) + "..."}</p>
        </div>

        <div className="card--btns">
          <IoPlayOutline size={22} className="ply--btn" />

          <BookmarkButton size={20} Anime={anime} />
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
