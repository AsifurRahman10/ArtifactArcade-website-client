import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

export const FeatureCard = ({ item }) => {
  const { _id, artifactName, like, historicalContext, artifactImage } = item;
  return (
    <div className="relative group">
      <img
        src={artifactImage}
        className="h-[360px] w-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-lg font-bold absolute -top-10 bg-custom-btn p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-2">
          {artifactName}
        </h3>
        <p className="transition-opacity duration-500 ease-in-out">
          {historicalContext}
        </p>
        <p className="flex items-center gap-2 mt-2 transition-opacity duration-500 ease-in-out">
          <AiOutlineLike className="text-blue-500 text-2xl" />
          <span className="text-lg">{like}</span>
        </p>
        <Link
          to={`/artifactsDetails/${_id}`}
          className="mt-4 absolute -bottom-5 bg-custom-btn font-semibold text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-500 ease-in-out group-hover:translate-y-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
