import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdLocationOff } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
  console.log(like);

  const [liked, setLiked] = useState(like || 0);
  console.log(liked);
  const [likeToggle, setLikeToggle] = useState(false);
  console.log(likeToggle);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:4000/likedArtifacts?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          const alreadyLiked = res.data.likedArtifacts?.find(
            (item) => item.id === _id
          );
          if (alreadyLiked) {
            setLikeToggle(true);
          }
        })
        .catch((err) => {
          console.error("Error fetching liked artifacts:", err);
        });
    }
  }, [user?.email, _id]);

  // Handle like action
  const handleLike = () => {
    if (!user?.email) {
      alert("You must be logged in to like an artifact!");
      return;
    }

    if (!likeToggle) {
      const newLiked = liked + 1;
      const updatedLike = { like: newLiked };

      axios
        .patch(`http://localhost:4000/updateLike/${_id}`, updatedLike)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .put(
                `http://localhost:4000/likedArtifacts/${user.email}`,
                { id: _id, image: artifactImage },
                { withCredentials: true }
              )
              .then((res) => {
                console.log(res);
                setLikeToggle(true);
                setLiked(newLiked);
              })
              .catch((err) =>
                console.error("Error adding to liked artifacts:", err)
              );
          }
        })
        .catch((err) => console.error("Error updating like count:", err));
    }
  };

  // Handle dislike action
  const handleDislike = () => {
    if (!user?.email) {
      alert("You must be logged in to dislike an artifact!");
      return;
    }

    if (likeToggle) {
      const newLiked = liked - 1;
      const updatedLike = { like: newLiked };

      axios
        .patch(`http://localhost:4000/updateLike/${_id}`, updatedLike)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .delete(
                `http://localhost:4000/likedArtifacts/${user.email}/${_id}`,
                { withCredentials: true }
              )
              .then(() => {
                setLikeToggle(false);
                setLiked(newLiked);
              })
              .catch((err) =>
                console.error("Error removing from liked artifacts:", err)
              );
          }
        })
        .catch((err) => console.error("Error updating like count:", err));
    }
  };

  return (
    <div className="pb-0 md:pb-10">
      <HelmetProvider>
        <Helmet>
          <title>{artifactName} - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title title={"Artifact Details"} />
      <div className="w-11/12 lg:w-9/12 mx-auto mt-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="text-3xl font-bold text-custom-btn">{artifactName}</h2>
          <div>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="font-semibold text-lg">
                Total Likes: {liked}
              </span>
              <span className="ml-2 flex items-center">
                {likeToggle ? (
                  <button className="btn" onClick={handleDislike}>
                    <AiOutlineDislike className="text-blue-500 mr-1 text-3xl" />
                  </button>
                ) : (
                  <button className="btn" onClick={handleLike}>
                    <AiOutlineLike className="text-blue-500 mr-1 text-3xl" />
                  </button>
                )}
              </span>
            </p>
          </div>
        </div>
        {/* Image */}
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
        {/* Additional Information */}
        <div className="flex flex-col space-y-1 mt-4">
          <h3 className="text-gray-800 font-semibold">
            <span className="text-gray-500">Type of Artifact:</span>{" "}
            {artifactType}
          </h3>
          <h3 className="text-gray-800 font-semibold mt-4">
            <span className="text-gray-500">Discovered By:</span> {discoveredBy}
          </h3>
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
