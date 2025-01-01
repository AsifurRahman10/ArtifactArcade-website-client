import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const { _id, artifactImage, artifactName, historicalContext } = item;
  return (
    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow duration-300">
      <img class="rounded-t-lg h-[215px] w-full" src={artifactImage} alt="" />

      <div class="p-5 flex flex-col justify-between flex-grow">
        <div>
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {artifactName}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {historicalContext}
          </p>
        </div>

        <Link to={`/artifactsDetails/${_id}`}>
          <button class="bg-custom-btn text-white rounded-lg py-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
