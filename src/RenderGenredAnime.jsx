import React, { useEffect, useState } from "react";
import "./Assets/css/RenderGenredAnime.css";
import RenderAnimeCarousel from "./RenderAnimeCarousel";

function RenderGenredAnime({ Genre }) {
  const [genredAnimes, setGenredAnimes] = useState({});

  useEffect(() => {
    const filterByGenre = async (genre) => {
      const url = `http://localhost:5500/api/animeByGenre?genre=${genre}`;
      try {
        const response = await fetch(url);
        const result = await response.json();

        setGenredAnimes(result);
      } catch (err) {
        console.error(err);
      }
    };

    filterByGenre(Genre);
  }, [Genre]); // Added Genre as a dependency array

  const renderAnime = (anime, genre) => {
    console.log("Rendering anime for genre:", genre);

    return anime && anime.length ? (
      <RenderAnimeCarousel caption={genre} page={"genre"} anime={anime} />
    ) : null;
  };

  return (
    <>
      {Object.entries(genredAnimes).map(([genre, animeList]) =>
        renderAnime(animeList, genre),
      )}
    </>
  );
}

export default RenderGenredAnime;
