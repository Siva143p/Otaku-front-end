import React from "react";
// import "./Assets/css/AnimePoster.css";
import { Link } from "react-router-dom";

function AnimePoster({ anime, btnColor }) {
  // console.log("btnColor", btnColor);

  return (
    <Link
      to="/stream"
      className="max-w-7xl block sm:h-96 h-52 mx-auto my-0 sm:px-12 px-2"
      state={{ Anime: anime }}
    >
      <div className="w-full h-full relative">
        <img src={anime.image} alt="" className="size-full object-cover" />
        <div
          className="absolute px-8 py-3 rounded bottom-6 right-24 text-2xl font-extrabold text-white max-sm:px-4 max-sm:py-2"
          style={{ backgroundColor: btnColor }}
        >
          Watch Now
        </div>
      </div>
    </Link>
  );
}

export default AnimePoster;
