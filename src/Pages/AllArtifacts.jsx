import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { Card } from "../Component/Card";

export const AllArtifacts = () => {
  const allArtifactsData = useLoaderData();
  return (
    <div>
      <Title
        title={"All Artifacts"}
        para={
          "Explore a curated collection of historical artifacts from around the world. Discover their origins, significance, and the fascinating stories behind these treasures of human history."
        }
      ></Title>
      <div className="w-11/12 lg:w-9/12 mx-auto my-10 lg:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArtifactsData.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};
