import Lottie from "lottie-react";
import error from "../../public/error.json";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="max-h-screen flex flex-col justify-center items-center w-11/12 mx-auto">
      <Lottie className="mt-28" animationData={error} loop={true} />
      <h2 className="text-3xl font-bold text-custom-btn">
        404 - Page not found
      </h2>
      <p className="mt-4 text-lg font-semibold text-gray-700 text-center">
        Oops! The page you’re looking for doesn’t exist. Check the URL or head
        back to the homepage to explore more.
      </p>
      <Link to={"/"}>
        <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
          Go Back to Homepage
        </button>
      </Link>
    </div>
  );
};
