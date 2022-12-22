import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      {/* <Slider {...settings}>
        <div className="h-[650px] w-[60px] bg-white">
          <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8"></img>
        </div>
        <div className="h-[650px] w-[60px] bg-white">
          <h3>2</h3>
        </div>
        <div className="h-[650px] w-[60px] bg-white">
          <h3>3</h3>
        </div>
        <div className="h-[650px] w-[60px] bg-white">
          <h3>4</h3>
        </div>
        <div className="h-[650px] w-[60px] bg-white">
          <h3>5</h3>
        </div>
        <div className="h-[650px] w-[60px] bg-white">
          <h3>6</h3>
        </div>
      </Slider> */}
    </div>
  );
}
