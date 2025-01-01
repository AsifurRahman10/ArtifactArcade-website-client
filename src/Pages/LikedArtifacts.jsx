import { useContext, useEffect, useState } from "react";
import { Title } from "../Component/Title";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

export const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedData, setLikeData] = useState([]);
  console.log(likedData);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/likedArtifacts?email=${user.email}`)
      .then((res) => {
        setLikeData(res.data.likedArtifacts);
      });
  }, []);
  return (
    <div>
      <Title
        title={"Liked Artifacts"}
        para={
          "Explore all the artifacts you've liked and saved in one convenient place."
        }
      ></Title>

      <div className="w-11/12 lg:w-9/12 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 py-10">
        {likedData.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
              src={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
