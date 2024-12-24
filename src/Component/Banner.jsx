import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";

export const Banner = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const bannerImg = [banner1, banner2, banner3, banner4, banner5, banner6];
  return (
    <div>
      <div className="slider-container">
        <Slider
          {...settings}
          className="relative overflow-hidden max-h-[700px]"
        >
          {bannerImg.map((banner, idx) => (
            <div
              key={idx}
              className="relative max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
            >
              <img className="w-full h-full object-cover" src={banner} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  Your Text Here
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
