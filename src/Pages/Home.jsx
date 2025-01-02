import React from "react";
import { Banner } from "../Component/Banner";
import { FeatureArtifacts } from "../Component/FeatureArtifacts";

export const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <FeatureArtifacts></FeatureArtifacts>
      </section>
    </div>
  );
};
