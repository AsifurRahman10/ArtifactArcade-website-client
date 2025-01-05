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
      .get(
        `https://artifact-arcade-server.vercel.app/myArtifacts?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setMyArtifacts(res.data);
      });
  }, []);

  if (!myArtifacts || myArtifacts.length === 0) {
    return (
      <div className="w-11/12 lg:w-9/12 mx-auto md:min-h-[calc(100vh-20rem)]">
        <h2 className="mt-10 text-2xl font-semibold text-center text-gray-700">
          You haven’t added any artifacts yet
        </h2>
      </div>
    );
  }

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
