import img1 from "../assets/aboutus.jpg";
import dummy from "../assets/dummy.png";
import { motion } from "motion/react";

export const AboutUs = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#F4E3D2] to-[#ECD5C7] relative">
      <div className="flex flex-col lg:flex-row items-center w-11/12 lg:w-9/12 mx-auto gap-12">
        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="rounded-lg overflow-hidden shadow-lg group">
            <img
              src={img1}
              alt="Historical Artifact"
              className="object-cover w-full h-auto transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-500"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-[#4A3423] text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Unveil Timeless Mysteries
          </h2>
          <p className="text-[#705D4A] text-lg md:text-xl leading-relaxed tracking-wide">
            Step into a realm where history whispers its secrets. Dive into
            stories etched in artifacts, revealing the marvels of ancient
            civilizations. Let your curiosity unlock the door to the past.
          </p>
          <button className="mt-4 px-8 py-3 text-white font-semibold bg-gradient-to-r from-[#6B4E35] to-[#4A3423] rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-[#4A3423] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <motion.div
        className="absolute -top-32 right-4 opacity-50"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img src={dummy} alt="" />
      </motion.div>
    </div>
  );
};
