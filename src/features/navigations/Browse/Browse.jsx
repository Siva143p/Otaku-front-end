import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import RenderGenredAnime from "../../../RenderGenredAnime";
import AlphabeticalOrder from "./AlphabeticalOrder";
import Filter from "../../filter/Filter";

function Browse({ AnimeData }) {
  const location = useLocation();
  const { category, Quote } = location.state || {};
  const [filterComp, setFilterComp] = useState(false);

  const genres = [
    "action",
    "adventure",
    "comedy",
    "supernatural",
    "thriller",
    "drama",
    "fantasy",
    "sci-fi",
    "romance",
    "music",
    "seinen",
    "shonen",
    "shojo",
    "slice of life",
    "sports",
    "superhero",
    "Science fantasy",
    "Horror",
    "Dark fantasy",
    "Martial arts",
    "Music",
    "Mystery",
  ];

  // console.log(category);

  const isGenre = genres.some((genre) =>
    category ? genre.toLocaleLowerCase() === category.toLocaleLowerCase() : null
  );

  // console.log(isGenre);

  return (
    <div className="max-w-7xl mx-auto text-white">
      {isGenre ? (
        <div>
          {category && (
            <h2 className="text-center font-semibold mt-12">{category}</h2>
          )}
          {Quote && <p className="text-center text-sm">{Quote}</p>}
        </div>
      ) : (
        <div className="flex w-5/6 mx-auto justify-between h-16 items-center">
          <div>
            {category && (
              <h2 className="text-center font-semibold">{category}</h2>
            )}
          </div>
          <div
            className="text-base p-2 text-neutral-500 font-semibold cursor-pointer hover:text-white hover:bg-zinc-700 relative"
            onClick={() => setFilterComp(!filterComp)}
          >
            <TbAdjustmentsHorizontal size={25} className="inline" />
            FIlter
            {filterComp && <Filter Page={category} />}
          </div>
        </div>
      )}

      {isGenre && <RenderGenredAnime Genre={category} AniData={AnimeData} />}
      {category === "Alphabetical" && <AlphabeticalOrder />}
    </div>
  );
}

export default Browse;
