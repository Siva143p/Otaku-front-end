import React, { useEffect, useRef, useState } from "react";
import { Alphabets } from "./Alphabetical";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import BookmarkButton from "../../saveAnime/BookmarkButton";
import "../../../Assets/css/AlphabeticalOrder.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnimesByAlphabet,
  selectFilteredAnimes,
} from "../../filter/filterSlice";

function AlphabeticalOrder() {
  const [alphabets, setAlphabets] = useState({});
  const [active, setActive] = useState("#");
  const dispatch = useDispatch();
  const animes = useSelector(selectFilteredAnimes); // Redux state
  const sectionRefs = useRef({});

  // Fetch animes from Redux when the component mounts
  useEffect(() => {
    dispatch(fetchAnimesByAlphabet());
  }, [dispatch]);

  useEffect(() => {
    if (animes && Object.keys(animes).length > 0) {
      setAlphabets(animes); // Update the local state with fetched animes
    }
  }, [animes]);

  const scrollToSection = (key) => {
    setActive(key);
    if (sectionRefs.current[key]) {
      sectionRefs.current[key].scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderDivs = (animes, index) => {
    return (
      <section
        className="mt-3"
        key={index}
        ref={(el) => (sectionRefs.current[animes[0]] = el)}
      >
        {animes[1].length > 0 && (
          <div className="border-b-2">
            <h1 className="text-2xl" id={animes[0]}>
              {animes[0]}
            </h1>
          </div>
        )}
        {animes[1].map((anime) => {
          return (
            <div
              className="ani--div mt-1 mb-0 flex items-center hover:bg-zinc-700 p-2 cursor-pointer"
              key={anime._id}
            >
              <div className="h-32" style={{ width: "20%" }}>
                <img
                  src={anime.thumb}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4" style={{ width: "78%" }}>
                <p className="text-base font-semibold m-0">{anime.title}</p>
                <span className="text-zinc-500 font-semibold hover--show hidden">
                  4.7 <MdOutlineStar className="inline" /> (105K)
                </span>
                <p className="text-gray-400 m-0 text-sm max-sm:hidden">
                  {anime.synopsis}
                </p>
                <span className="text-neutral-500 mt-1 text-base hover--rmv block">
                  Sub | Dub
                </span>
                <div className="hover--show mt-2 hidden">
                  <IoPlayOutline
                    size={26}
                    className="inline text-orange-600 mr-3"
                  />
                  <BookmarkButton size={24} page={"Browse"} Anime={anime} />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  console.log("alpha", alphabets);

  return (
    <div className="w-5/6 mx-auto relative">
      <div className="alphabet-links justify-center sticky top-16 bg-neutral-900 flex items-center z-40">
        {Alphabets.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={
              item === active
                ? "text-base text-orange-700 font-bold"
                : "text-base text-neutral-600 font-bold hover:text-lg hover:text-white"
            }
          >
            {item}
          </button>
        ))}
      </div>

      {/* Rendering the anime sections */}
      {Object.entries(alphabets).map((anime, index) => {
        return renderDivs(anime, index);
      })}
    </div>
  );
}

export default AlphabeticalOrder;
