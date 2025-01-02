import axios from "axios";
import { useEffect, useState } from "react";
import { FeatureCard } from "./FeatureCard";

export const FeatureArtifacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/highestLike").then((res) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-10 md:mt-20">
        {data.map((item) => (
          <FeatureCard key={item._id} item={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
