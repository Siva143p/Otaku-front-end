import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { CiBookmark } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";

import "./Assets/css/CarouselFade.css";
import { Link } from "react-router-dom";
import BookmarkButton from "./features/saveAnime/BookmarkButton";
function CarouselFade({ aniData }) {
  return (
    <Carousel fade className="carousel--box">
      {aniData.map((Item) => (
        <Carousel.Item className="carousel--slides" key={Item.id}>
          <ExampleCarouselImage text={Item.image} />
          <Carousel.Caption>
            <div className="Carousel--content">
              <div className="title">
                <img src={Item.title_image} alt="" />
              </div>
              <div className="info max-lg:hidden">
                {/* <h3>First slide label</h3> */}
                <p>{Item.synopsis.slice(0, 200) + "..."}</p>
              </div>

              <div className="m-0 lg:hidden">
                <p className="m-0 font-semibold text-sm text-gray-500 text-center ">
                  {Item.dub ? "Sub | Dub" : "Sub"} -{" "}
                  {Item.genre.map((genre, index) =>
                    index === Item.genre.length - 1
                      ? genre + "."
                      : index < 5
                      ? genre + ", "
                      : "..."
                  )}
                </p>
              </div>

              <div className="btns">
                <Link to="/stream" state={{ Anime: Item }}>
                  <button className="ep--btn">
                    <IoPlayOutline size={24} className="inline" />
                    START WATCHING
                  </button>
                </Link>

                <div className="bk-mrk">
                  <BookmarkButton page={"home--carou"} size={24} Anime={Item} />
                </div>
                {/* <button className="Save--btn">
                  <CiBookmark size={24} />
                </button> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;
