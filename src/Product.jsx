import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./Assets/css/Product.css";

import AnimeCard from "./AnimeCard";

function Product({ data, wordLimit }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 5,
      //   slidesToSlide: 3, // optional, default to 1.
    },
    desktop_Small: {
      breakpoint: { max: 1100, min: 1024 },
      items: 4,
      //   slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      //   slidesToSlide: 1, // optional, default to 1.
    },
  };

  console.log("Product Data : ", data);
  return (
    <div className="Products">
      <Carousel
        swipeable={false}
        draggable={true}
        // showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlay={false}
        // autoPlaySpeed={2000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => (
          <div className="product" key={item.id}>
            <Link to="/stream" state={{ Anime: item }}>
              <AnimeCard anime={item} wordLimit={wordLimit} />
            </Link>

            <div className="card--ttl">
              <p>{item.title}</p>
              {item.dub ? (
                <p className="sub--dub">Sub | Dub</p>
              ) : (
                <p className="sub--dub">Subtitled</p>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Product;
