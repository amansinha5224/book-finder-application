import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function Explore() {
  const DataURL = "https://example-data.draftbit.com/books?_limit=10";
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch(DataURL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-5xl px-6">
      <a 
        href="/explore"
      >
        <h1 className="mb-5 mt-56 md:mt-28 text-3xl font-bold text-yellow-900 hover:underline">Readers' Most Anticipated Books</h1>
      </a>
      <p className="mb-10 text-xl font-semibold text-yellow-900">Discover bookfinder's top picks!</p>
      <Slider {...settings}>
        {data.map((e, i) => {
          const { title, image_url } = e;
          return (
            <article className="px-4">
              <img
                className="mx-full mt-4 h-60 rounded-lg bouder-solid border-yellow-600 shadow-2xl drop-shadow-xl p-6 rounded-lg hover:border-4"
                key={i}
                src={image_url}
                alt={title}
              />

              <h2 className="mt-4 mr-8 text-center font-bold text-yellow-900 decoration-yellow-800 decoration-2 hover:underline">{title}</h2>
            </article>
          );
        })}
      </Slider>
      </div>
    </>
  );
}

export default Explore;