import { useContext, useEffect, useState } from "react";
import { Title } from "../Component/Title";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { MyArtifactsCard } from "../Component/MyArtifactsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Lottie from "lottie-react";
import loadingImg from "../../public/loading.json";

export const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/myArtifacts?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyArtifacts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
