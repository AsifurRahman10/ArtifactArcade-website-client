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

  const bannerImg = [
    {
      image: banner1,
      text: "Explore History Through Artifacts",
      title: "Discover the World’s Hidden Stories",
      description:
        "Dive into a rich collection of historical artifacts that tell the stories of past civilizations and their groundbreaking achievements. Engage with history like never before.",
    },
    {
      image: banner2,
      text: "Unearth Historical Insights",
      title: "Unlock the Mysteries of the Past",
      description:
        "Our platform allows you to explore ancient artifacts and uncover their historical significance. Experience the power of history through interactive storytelling.",
    },
    {
      image: banner3,
      text: "A Portal to the Past",
      title: "Experience the Wonders of History",
      description:
        "Interact with a vast collection of historical items and learn about their cultural, scientific, and societal importance. Get inspired by the achievements of past civilizations.",
    },
    {
      image: banner4,
      text: "Contribute to Historical Knowledge",
      title: "Help Preserve and Share History",
      description:
        "Join our community by contributing your knowledge. Add new artifacts, share insights, and be part of an ongoing effort to document and preserve history for future generations.",
    },
    {
      image: banner5,
      text: "Engage and Explore",
      title: "Interact with Artifacts and People",
      description:
        "Engage with the community by liking, commenting, and discussing artifacts. Share your thoughts and learn from others who are passionate about history and its preservation.",
    },
    {
      image: banner6,
      text: "A User-Centric Experience",
      title: "Explore Historical Artifacts with Ease",
      description:
        "Enjoy a seamless, intuitive experience as you browse through historical artifacts. Our user-friendly interface makes it easy to explore and learn at your own pace.",
    },
  ];

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
              className="relative h-[500px] md:h-[600px] lg:h-[700px]"
            >
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={banner.image}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                <div className="lg:w-8/12 mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                    {banner.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-lg lg:text-2xl">
                    {banner.description}
                  </p>
                  <p className="mt-2 text-xl md:text-2xl">{banner.text}</p>
                  <button className="btn mt-6 bg-custom-btn text-white w-48 h-14 rounded-none border-none transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:underline hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-btn-dark text-lg font-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
