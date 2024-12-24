import React from "react";
import { Title } from "../Component/Title";
import axios from "axios";

export const AddArtifacts = () => {
  const handleAddArtifactsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const initialData = Object.fromEntries(formData.entries());
    const artifactImage = formData.get("artifactImage");
    const uploadImg = new FormData();
    uploadImg.append("image", artifactImage);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=0e19a3d519d57f6985d8f61637db8a0a",
        uploadImg
      )
      .then((res) => {
        if (res.data.data.display_url) {
          const image = res.data.data.display_url;
          console.log(image);
          const TotalData = {
            ...initialData,
            image,
          };
          console.log(TotalData);
        }
      });
  };
  return (
    <div>
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
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Artifact Name
            </label>
            <input
              name="artifactName"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Artifact Name"
              required
            />
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Image */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4">
            <label class="block text-lg  font-bold text-black dark:text-white flex-1">
              Artifact Image
            </label>
            <input
              name="artifactImage"
              class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              type="file"
            />
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Type */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white">
              Artifact Type
            </label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn">
              <option selected>Choose type</option>
              <option value="US">Tools</option>
              <option value="CA">Weapons</option>
              <option value="FR">Documents</option>
              <option value="DE">Writings</option>
            </select>
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Artifact Type */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Historical Context
            </label>
            <textarea
              name="historicalContext"
              rows="3"
              class=" flex-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-custom-btn focus:border-custom-btn dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-blue-500"
              placeholder="Write historical context here"
            ></textarea>
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Created At */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Created At
            </label>
            <input
              type="text"
              name="createdAt"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="When it was created e.g. '100 BC'"
              required
            />
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Discovered At */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Discovered At
            </label>
            <input
              type="text"
              name="Dis"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="When it was discovered e.g. '100 BC'"
              required
            />
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Discovered By */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Discovered By
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
              placeholder="Enter Name of Author or organization"
              required
            />
          </div>
          <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Present Location */}
          <div className="flex lg:items-center flex-col md:flex-row mt-4 justify-between">
            <label class="block mb-2 text-lg  font-bold text-black dark:text-white flex-1">
              Present Location
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn flex-1"
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
