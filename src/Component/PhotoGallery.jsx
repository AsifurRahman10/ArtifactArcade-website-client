import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";

export const PhotoGallery = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <p className="text-custom-btn font-semibold tracking-[0.15em] text-lg mb-6 uppercase">
          Gallery
        </p>
        <h2 className="text-5xl font-extrabold title-text">
          Explore Our Collection
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-20">
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner1}
              alt="Banner"
            />
          </div>
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner2}
              alt="Banner"
            />
          </div>
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner3}
              alt="Banner"
            />
          </div>
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner4}
              alt="Banner"
            />
          </div>
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner5}
              alt="Banner"
            />
          </div>
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={banner6}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
