import React, { useContext, useState } from "react";
import { Title } from "../Component/Title";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const AddArtifacts = () => {
  const [selectedType, setSelectedType] = useState("");
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const handleSelectedType = (e) => {
    setSelectedType(e.target.value);
  };
  const handleAddArtifactsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const initialData = Object.fromEntries(formData.entries());
    const artifactImage = formData.get("artifactImage");
    const { artifactImage: _, ...filteredData } = initialData;
    const uploadImg = new FormData();
    uploadImg.append("image", artifactImage);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=0e19a3d519d57f6985d8f61637db8a0a",
        uploadImg
      )
      .then((res) => {
        if (res.data.data.display_url) {
          const artifactImage = res.data.data.display_url;
          const artifactType = selectedType;
          const TotalData = {
            ...filteredData,
            artifactImage,
            displayName,
            email,
            artifactType,
            like: 0,
          };
          axios
            .post("http://localhost:4000/addArtifacts", TotalData, {
              withCredentials: true,
            })
            .then((data) => {
              if (data.data.insertedId) {
                Swal.fire({
                  title: "Successful",
                  text: "You information has been added",
                  icon: "success",
                });
                form.reset();
              }
            });
        }
      });
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Add Artifacts - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title
        title={"Add Artifacts"}
        para={
          "Contribute valuable knowledge by adding historical artifacts and help others discover and learn more about these fascinating pieces of history"
        }
      ></Title>

      {/* form design */}

      <div className="w-11/12 lg:w-9/12 mx-auto my-10 md:my-20">
        <form onSubmit={handleAddArtifactsSubmit}>
          {/* Artifact Name */}
          <div className="flex lg:items-center flex-col md:flex-row">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Artifact Name
            </label>
            <input
              name="artifactName"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Artifact Name"
              required
            />
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Image */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4">
            <label className="block text-lg  font-bold text-black dark:text-white flex-1">
              Artifact Image
            </label>
            <input
              name="artifactImage"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              type="file"
            />
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Type */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white">
              Artifact Type
            </label>
            <select
              onChange={handleSelectedType}
              value={selectedType}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn"
            >
              <option value="">Choose type</option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Type */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Historical Context
            </label>
            <textarea
              name="historicalContext"
              rows="3"
              className=" flex-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-custom-btn focus:border-custom-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-blue-500"
              placeholder="Write historical context here"
            ></textarea>
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Created At */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Created At
            </label>
            <input
              type="text"
              name="createdAt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="When it was created e.g. '100 BC'"
              required
            />
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Discovered At */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Discovered At
            </label>
            <input
              type="text"
              name="discoveredAt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="When it was discovered e.g. '100 BC'"
              required
            />
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Discovered By */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Discovered By
            </label>
            <input
              type="text"
              name="discoveredBy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Enter Name of Author or organization"
              required
            />
          </div>
          <hr className="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Present Location */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Present Location
            </label>
            <input
              type="text"
              name="presentLocation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Enter name of location"
              required
            />
          </div>
          <button className="btn w-8/12 mx-auto block mt-14 bg-custom-btn text-white rounded-full">
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};
