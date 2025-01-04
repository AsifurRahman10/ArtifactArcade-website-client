import { useContext, useEffect, useState } from "react";
import { Title } from "../Component/Title";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Lottie from "lottie-react";
import loadingImg from "../../public/loading.json";

export const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedData, setLikeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/likedArtifacts?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setLikeData(res.data.likedArtifacts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user.email]);

  if (loading) {
    return (
      <div className="mix-h-screen w-full">
        <Lottie
          className="w-1/3 mx-auto"
          animationData={loadingImg}
          loop={true}
        />
      </div>
    );
  }

  if (!likedData || likedData.length === 0) {
    return (
      <div className="w-11/12 lg:w-9/12 mx-auto md:min-h-[calc(100vh-20rem)]">
        <h2 className="mt-10 text-2xl font-semibold text-center text-gray-700">
          You haven’t liked any artifacts yet
        </h2>
      </div>
    );
  }
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Liked Artifacts - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title
        title={"Liked Artifacts"}
        para={
          "Explore all the artifacts you've liked and saved in one convenient place."
        }
      ></Title>

      <div className="w-11/12 lg:w-9/12 mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:py-10">
        {likedData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <img
              className="h-[300px] w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
              src={item.image}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <Link to={`/artifactsDetails/${item.id}`}>
              <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:underline">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
