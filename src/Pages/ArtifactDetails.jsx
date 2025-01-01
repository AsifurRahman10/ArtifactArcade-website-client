import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";

export const ArtifactDetails = () => {
  const data = useLoaderData();
  const {
    ArtifactName,
    Like,
    PresentLocation,
    DiscoveredBy,
    DiscoveredAt,
    CreatedAt,
    HistoricalContext,
    ArtifactType,
    ArtifactImage,
  } = data;
  return (
    <div className="">
      <Title title={"Artifacts Details"}></Title>
      <div className="w-11/12 lg:w-9/12 mx-auto mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{ArtifactName}</h2>
          <div>
            <p>Created at : {CreatedAt}</p>
            <p>Like : {Like}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
