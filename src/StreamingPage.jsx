import React from "react";
import "./Assets/css/StreamingPage.css";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function StreamingPage({ AnimeData }) {
  const location = useLocation();
  const { Anime } = location.state || {};
  const SimilairAnime = [];
  let a;

  // AnimeData.map((anime) => {
  //   anime.genre.filter((genre) => {
  //     Anime.genre.filter((thisAnimeGenre) => {
  //       return thisAnimeGenre.toLowerCase() === genre.toLowerCase()
  //         ? SimilairAnime.length
  //           ? SimilairAnime.filter((item) => {
  //               item.title !== anime ? SimilairAnime.push(anime) : (a = false);
  //             })
  //           : (a = false)
  //         : "";
  //     });
  //   });
  // });

  // console.log("Similair Anime : ", SimilairAnime);

  return (
    <>
      {Anime !== undefined ? (
        <>
          <div
            className="w-full h-2/5"
            style={{
              background: `url(${Anime.image}) no-repeat center`,
            }}
          >
            <div className="w-full h-full backdrop-blur">
              <div className=" max-w-6xl h-full mx-auto">
                <img
                  src={Anime.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto my-12 lg:px-18">
            <div className="anime--streaming--info">
              <div className="st--ani--info">
                <h2 className="text-white text-4xl">{Anime.title}</h2>
                <p className="sub--dub">
                  {Anime.rated} {Anime.dub ? "Sub | Dub" : "Subtitled"}
                </p>

                <div className="st--rating flex">
                  <MdOutlineStar size={30} color="rgb(199, 199, 199)" />
                  <MdOutlineStar size={30} color="rgb(199, 199, 199)" />
                  <MdOutlineStar size={30} color="rgb(199, 199, 199)" />
                  <MdOutlineStar size={30} color="rgb(199, 199, 199)" />
                  <MdOutlineStar size={30} color="rgb(199, 199, 199)" /> |
                  <span> Average Rating: 4.7 (8.1k)</span>
                </div>

                <div className="st--btns">
                  <button id="st--add--btn">
                    <CiBookmark size={24} className="st--btn inline" />
                    ADD TO WATCH LIST
                  </button>
                  <button id="st--otaku--list">
                    <FaPlus
                      size={24}
                      fontWeight={400}
                      className="st--btn inline"
                    />
                    ADD TO OTAKULIST
                  </button>
                </div>

                <div className="text-gray-100 text-base">
                  <p>{Anime.synopsis}</p>
                </div>

                <div className="st--genre">
                  {Anime.genre.map((item) => {
                    return (
                      <Link to="/browse" state={{ category: item }}>
                        {item}
                      </Link>
                    );
                  })}
                </div>

                <div className="st--other--details text-gray-100">
                  <div className="st--detail">
                    <h3>Publisher</h3> <p>Shochiku</p>
                  </div>
                  <div className="st--detail">
                    <h3>Audio</h3>{" "}
                    <p>
                      {Anime.lang.map((item) => {
                        return item + ", ";
                      })}
                    </p>
                  </div>
                  <div className="st--detail">
                    <h3>Subtitles</h3>
                    <div className="st--subtitles">
                      <p>
                        English, Deutsch, Español (América Latina), Español
                        (España), Français, Italiano, Português (Brasil),
                        Русский, العربية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="st--ep1--div">
                <div className="st--epi--img">
                  <img src={Anime.thumb} alt="" />
                </div>
                <button className="text-base font-bold flex items-center gap-2 justify-center">
                  <IoPlayOutline size={24} />
                  START WATCHING E1
                </button>
              </div>
            </div>
          </div>

          {Anime.episodeList ? (
            ""
          ) : (
            <div className="st--epi--list">
              <h4>
                Opps! Currently we don't have any episode we're Working on that
              </h4>
            </div>
          )}
        </>
      ) : (
        ""
      )}{" "}
    </>
  );
}

export default StreamingPage;
