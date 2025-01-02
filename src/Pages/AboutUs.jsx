import img1 from "../assets/aboutus.jpg";
export const AboutUs = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#F4E3D2] to-[#ECD5C7]">
      <div className="flex flex-col md:flex-row items-center w-11/12 lg:w-9/12 mx-auto gap-12">
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
          <h2 className="text-[#4A3423] text-4xl font-extrabold tracking-tight leading-tight">
            Unveil Timeless Mysteries
          </h2>
          <p className="text-[#705D4A] text-lg leading-relaxed tracking-wide">
            Step into a realm where history whispers its secrets. Dive into
            stories etched in artifacts, revealing the marvels of ancient
            civilizations. Let your curiosity unlock the door to the past.
          </p>
          <button className="mt-4 px-8 py-3 text-white font-medium bg-gradient-to-r from-[#6B4E35] to-[#4A3423] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
