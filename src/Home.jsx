import React from "react";
import CarouselFade from "./CarouselFade";
import Product from "./Product";
import RenderAnimeCarousel from "./RenderAnimeCarousel";
import AnimePoster from "./AnimePoster";
import AnimeRecommendation from "./AnimeRecommendation";

const Home = ({ AnimeData }) => {
  // console.log("aniData : ", AnimeData);

  const popularAni = [
    "kaiju no.8",
    "wind breaker",
    "solo leveling",
    "demon slayer",
    "my hero academia",
    "Alya Sometimes Hides Her Feelings in Russian",
    "Failure Frame: I Became the Strongest and Annihilated Everything with Low-Level Spells",
    "Tower of God",
    "A Journey Through Another World: Raising Kids While Adventuring",
  ];

  const newRealse = [
    "days with my step sister",
    "My Deer Friend Nokotan",
    "Alya Sometimes Hides Her Feelings in Russian",
    "Failure Frame: I Became the Strongest and Annihilated Everything with Low-Level Spells",
    "A Journey Through Another World: Raising Kids While Adventuring",
    "Tower of God",
  ];

  const animePoster = [
    "A Journey Through Another World: Raising Kids While Adventuring",
    "my hero academia",
    "demon slayer",
    "My Deer Friend Nokotan",
  ];

  const animeForPoster = [];
  const ongoingAni = [];
  const pplrAni = [];
  const TamilDubAnime = [];

  AnimeData.map((item) => {
    popularAni.map((anime) =>
      item.filter_key.toLowerCase().includes(anime.toLowerCase())
        ? pplrAni.push(item)
        : ""
    );

    newRealse.filter((anime) =>
      item.filter_key.toLowerCase().includes(anime.toLowerCase())
        ? ongoingAni.push(item)
        : ""
    );

    animePoster.filter((anime) =>
      item.filter_key.toLowerCase().includes(anime.toLowerCase())
        ? animeForPoster.push(item)
        : ""
    );

    item.lang.map((anime) =>
      anime.toLowerCase() === "tamil" ? TamilDubAnime.push(item) : ""
    );
  });

  return (
    <div className="size-full text-white">
      <CarouselFade aniData={pplrAni} />

      <div
        className="w-full relative z-10 max-lg:mt-0 lg:-mt-40"
        // style={{ marginTop: "-10rem" }}
      >
        <div className="pl-12 max-sm:p-3" style={{ marginBottom: "-2rem" }}>
          <h2>Most Popular Animes</h2>
          <p>Check out the most Popular animes</p>
        </div>
        <div className="">
          <Product data={pplrAni} wordLimit={200} />
        </div>
      </div>

      <RenderAnimeCarousel
        anime={ongoingAni}
        caption={"New Releases"}
        content={"Check out the Ongoing animes"}
        page={"home"}
      />

      <AnimePoster anime={animeForPoster[1]} btnColor={"rgb(240, 121, 53)"} />

      <RenderAnimeCarousel
        anime={TamilDubAnime}
        caption={"Tamil Dubbed Animes"}
        content={"Check out these Popular animes in Tamil"}
        page={"home"}
      />

      <AnimeRecommendation anime={AnimeData[74]} />
    </div>
  );
};

export default Home;
