import axios from "axios";
import { useEffect, useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Link } from "react-router-dom";

export const FeatureArtifacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://artifact-arcade-server.vercel.app/highestLike")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="py-10 md:py-20 w-11/12 lg:w-9/12 mx-auto">
      <div className="text-center">
        <p className="text-custom-btn font-semibold tracking-[0.15em] text-lg mb-6">
          What's going on
        </p>
        <h2 className="text-5xl font-extrabold title-text">
          Featured Artifacts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20 md:mt-20">
        {data.map((item) => (
          <FeatureCard key={item._id} item={item}></FeatureCard>
        ))}
      </div>
      <Link to={"/allArtifacts"}>
        <button className="mt-10 md:mt-20 px-6 py-2 block border hover:bg-custom-btn hover:text-white rounded mx-auto transition-all duration-500 ease-in-out hover:scale-105">
          View all Artifacts
        </button>
      </Link>
    </div>
  );
};
