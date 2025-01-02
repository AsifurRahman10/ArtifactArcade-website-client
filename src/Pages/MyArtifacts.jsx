import { useContext, useEffect, useState } from "react";
import { Title } from "../Component/Title";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { MyArtifactsCard } from "../Component/MyArtifactsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/myArtifacts?email=${user.email}`)
      .then((res) => {
        setMyArtifacts(res.data);
      });
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>My Artifacts - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title
        title={"My Artifacts"}
        para={"Discover all the artifacts you’ve contributed."}
      ></Title>
      <div className="w-11/12 lg:w-9/12 mx-auto my-10 grid grid-cols-1 gap-6">
        {myArtifacts.map((item) => (
          <MyArtifactsCard
            key={item._id}
            item={item}
            setMyArtifacts={setMyArtifacts}
          ></MyArtifactsCard>
        ))}
      </div>
    </div>
  );
};
