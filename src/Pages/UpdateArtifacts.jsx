import { useLoaderData, useNavigate } from "react-router-dom";
import { Title } from "../Component/Title";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UpdateArtifacts = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    artifactName,
    presentLocation,
    discoveredBy,
    discoveredAt,
    createdAt,
    historicalContext,
    artifactType,
    artifactImage,
    like,
  } = data;
  const [selectedType, setSelectedType] = useState(artifactType);
  const handleSelectedType = (e) => {
    setSelectedType(e.target.value);
  };

  const handleUpdateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const initialData = Object.fromEntries(formData.entries());
    const updatedData = { ...initialData, selectedType };

    axios
      .patch(`http://localhost:4000/updateArtifacts/${_id}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful",
            text: "You information has been Updated",
            icon: "success",
          });
          form.reset();
          navigate("/myArtifacts");
        }
      });
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Update Artifacts - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title
        title={"Update Artifacts"}
        para={
          "Enhance the collection by updating artifact details, ensuring accurate and valuable information for others to discover and learn about these historical treasures."
        }
      ></Title>

      {/* form design */}

      <div className="w-11/12 lg:w-9/12 mx-auto my-10 md:my-20">
        <form onSubmit={handleUpdateData}>
          {/* Artifact Name */}
          <div className="flex lg:items-center flex-col md:flex-row">
            <label className="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Artifact Name
            </label>
            <input
              defaultValue={artifactName}
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
              defaultValue={artifactImage}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              type="text"
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
              defaultValue={selectedType}
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
              defaultValue={historicalContext}
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
              defaultValue={createdAt}
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
              defaultValue={discoveredAt}
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
              defaultValue={discoveredBy}
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
              defaultValue={presentLocation}
              name="presentLocation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Enter name of location"
              required
            />
          </div>
          <button className="btn w-8/12 mx-auto block mt-14 bg-custom-btn text-white rounded-full">
            Update Artifact
          </button>
        </form>
      </div>
    </div>
  );
};
