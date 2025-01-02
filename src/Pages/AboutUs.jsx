import img1 from "../assets/aboutus.jpg";
export const AboutUs = () => {
  return (
    <div className="py-20 bg-[#F4E3D2]">
      <div className="flex items-center w-9/12 mx-auto gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={img1}
            alt="Historical Artifact"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-[#4A3423] text-3xl font-bold leading-snug">
            Explore the Mystery Over Ages
          </h2>
          <p className="text-[#705D4A] text-lg leading-relaxed">
            Step into a world where history's secrets come alive. Discover the
            mysteries that have shaped civilizations, preserved through
            artifacts spanning ages. Unearth stories hidden in the sands of time
            and let curiosity guide your journey.
          </p>
          <button className="mt-4 px-8 py-2 text-white bg-custom-btn hover:bg-[#6B4E35] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
