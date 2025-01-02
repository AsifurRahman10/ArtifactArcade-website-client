import React from "react";
import { Banner } from "../Component/Banner";
import { FeatureArtifacts } from "../Component/FeatureArtifacts";
import { AboutUs } from "./AboutUs";
import { PhotoGallery } from "../Component/PhotoGallery";

export const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <FeatureArtifacts></FeatureArtifacts>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <PhotoGallery></PhotoGallery>
      </section>
    </div>
  );
};
