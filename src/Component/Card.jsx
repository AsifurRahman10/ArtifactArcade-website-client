import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const { _id, artifactImage, artifactName, historicalContext } = item;
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow duration-300">
      <img
        className="rounded-t-lg h-[215px] w-full"
        src={artifactImage}
        alt=""
      />

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {artifactName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {historicalContext}
          </p>
        </div>

        {/* Button container with smooth height transition */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
          <Link to={`/artifactsDetails/${_id}`}>
            <button className="bg-custom-btn text-white rounded-lg py-2 w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
