import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

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
    speed: 300,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    cssEase: "ease-in-out",
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
    <div className="relative">
      <Slider {...settings} className="relative overflow-hidden">
        {bannerImg.map((banner, idx) => (
          <div
            key={idx}
            className="relative h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden"
          >
            {/* Background Image */}
            <motion.img
              className="w-full h-full object-cover"
              src={banner.image}
              style={{ transformOrigin: "center" }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <div className="lg:w-8/12 mx-auto">
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-7xl font-bold"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  {banner.title}
                </motion.h1>
                <motion.p
                  className="mt-4 text-sm md:text-lg lg:text-xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {banner.description}
                </motion.p>
                <motion.p
                  className="mt-2 text-lg md:text-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {banner.text}
                </motion.p>
                <motion.button
                  className="mt-6 bg-custom-btn text-white px-6 py-3 rounded-md border-none transition-all duration-300 transform hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-btn-dark text-base md:text-lg font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: "easeOut",
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
