import React from "react";
import Product from "./Product";
import "./Assets/css/RenderAnimeCarousel.css";
function RenderAnimeCarousel({ caption, content, anime, page }) {
  const renderAnimeCarouselForHome = () => {
    return (
      <div className="my-20">
        <div className="pl-12 max-sm:pl-3" style={{ marginBottom: "-1.5rem" }}>
          <h2>{caption}</h2>
          <p>{content}</p>
        </div>
        <div className="mt-0">
          <Product data={anime} wordLimit={200} />
        </div>
      </div>
    );
  };

  const renderAnimeCarouselForGenrePage = () => {
    if (anime.length) {
      return (
        <div className="action--genre--render">
          <h2>{caption}</h2>
          <Product data={anime} wordLimit={100} />
        </div>
      );
    }
  };

  const renderForHome = renderAnimeCarouselForHome();
  const renderForGenre = renderAnimeCarouselForGenrePage();
  return (
    <>
      {page === "home" ? renderForHome : ""}
      {page === "genre" ? renderForGenre : ""}
    </>
  );
}

export default RenderAnimeCarousel;
