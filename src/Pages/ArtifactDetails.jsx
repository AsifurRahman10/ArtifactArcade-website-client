import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { AiOutlineLike } from "react-icons/ai";
import { MdLocationOff } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";

export const ArtifactDetails = () => {
  const data = useLoaderData();
  const {
    ArtifactName,
    Like,
    PresentLocation,
    DiscoveredBy,
    DiscoveredAt,
    CreatedAt,
    HistoricalContext,
    ArtifactType,
    ArtifactImage,
  } = data;
  return (
    <div className="pb-10">
      <Title title={"Artifacts Details"} />
      <div className="w-11/12 lg:w-9/12 mx-auto mt-10">
        {/* heading */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-custom-btn">{ArtifactName}</h2>
          <div>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="font-semibold">Total Likes: {Like}</span>
              <span className="ml-2 flex items-center">
                <button className="">
                  <AiOutlineLike className="text-blue-500 mr-1 text-3xl" />
                </button>
              </span>
            </p>
          </div>
        </div>
        {/* img */}
        <div className="mt-6">
          <img
            className="h-full md:h-[400px] w-full object-cover"
            src={ArtifactImage}
            alt="Artifact"
          />
        </div>
        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mt-4">
          {HistoricalContext}
        </p>
        {/* Type of Artifact */}
        <div className="flex flex-col space-y-1 mt-2">
          <h3 className="text-gray-800 font-semibold">
            <span className="text-gray-500">Type of Artifact:</span>{" "}
            {ArtifactType}
          </h3>
          {/* Discovered By */}
          <h3 className="text-gray-800 font-semibold mt-2">
            <span className="text-gray-500">Discovered By:</span> {DiscoveredBy}
          </h3>
          {/* Created At */}
          <h3 className="text-gray-800 font-semibold mt-2">
            <span className="text-gray-500">Created At:</span> {CreatedAt}
          </h3>
        </div>
        {/* Location */}
        <div className="flex items-center space-x-10 mt-2">
          <h3 className="flex items-center text-gray-800 font-semibold">
            <MdLocationOff className="text-red-500 w-5 h-5" />
            <span className="ml-2">
              <span className="text-gray-500">Present Location:</span>{" "}
              {PresentLocation}
            </span>
          </h3>
          {/* Discovered At */}
          <h3 className="flex items-center text-gray-800 font-semibold">
            <FaSearchengin className="text-blue-500 w-5 h-5" />
            <span className="ml-2">
              <span className="text-gray-500">Discovered At:</span>{" "}
              {DiscoveredAt}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
