import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { AiOutlineLike } from "react-icons/ai";
import { MdLocationOff } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import axios, { Axios } from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    _id,
    artifactName,
    presentLocation,
    discoveredBy,
    discoveredAt,
    createdAt,
    historicalContext,
    artifactType,
    artifactImage,
    like,
  } = data;
  const [liked, setLiked] = useState(like);
  const handleLike = () => {
    setLiked((prevLiked) => {
      const newLiked = prevLiked + 1;
      const updatedLike = { like: newLiked };

      axios
        .patch(`http://localhost:4000/updateLike/${_id}`, updatedLike)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .put(`http://localhost:4000/likedArtifacts/${user.email}`, {
                id: _id,
                image: artifactImage,
              })
              .then((res) => {
                console.log(res);
              });
          }
        });

      return newLiked;
    });
  };
  return (
    <div className="pb-0 md:pb-10">
      <HelmetProvider>
        <Helmet>
          <title>{artifactName} - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title title={"Artifacts Details"} />
      <div className="w-11/12 lg:w-9/12 mx-auto mt-10">
        {/* heading */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-custom-btn">{artifactName}</h2>
          <div>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="font-semibold text-lg">
                Total Likes: {liked}
              </span>
              <span className="ml-2 flex items-center">
                <button className="btn" onClick={handleLike}>
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
            src={artifactImage}
            alt="Artifact"
          />
        </div>
        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mt-8">
          {historicalContext}
        </p>
        {/* Type of Artifact */}
        <div className="flex flex-col space-y-1 mt-4">
          <h3 className="text-gray-800 font-semibold">
            <span className="text-gray-500">Type of Artifact:</span>{" "}
            {artifactType}
          </h3>
          {/* Discovered By */}
          <h3 className="text-gray-800 font-semibold mt-4">
            <span className="text-gray-500">Discovered By:</span> {discoveredBy}
          </h3>
          {/* Created At */}
          <h3 className="text-gray-800 font-semibold mt-4">
            <span className="text-gray-500">Created At:</span> {createdAt}
          </h3>
        </div>
        {/* Location */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 mt-4">
          <h3 className="flex items-center text-gray-800 font-semibold">
            <MdLocationOff className="text-red-500 w-5 h-5" />
            <span className="ml-2">
              <span className="text-gray-500">Present Location:</span>{" "}
              {presentLocation}
            </span>
          </h3>
          {/* Discovered At */}
          <h3 className="flex items-center text-gray-800 font-semibold">
            <FaSearchengin className="text-blue-500 w-5 h-5" />
            <span className="ml-2">
              <span className="text-gray-500">Discovered At:</span>{" "}
              {discoveredAt}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
