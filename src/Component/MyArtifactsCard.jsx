import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { MdBrowserUpdated, MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const MyArtifactsCard = ({ item, setMyArtifacts }) => {
  const { _id, artifactName, artifactImage, artifactType, like } = item;
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/allArtifacts/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setMyArtifacts((prev) =>
                prev.filter((artifacts) => artifacts._id !== _id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your artifacts has been deleted.",
                icon: "success",
              });
              navigate("/allArtifacts");
            }
          });
      }
    });
  };
  return (
    <div className="shadow-lg rounded-lg p-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
      <div className="flex items-center  space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-40 h-40 object-cover rounded-lg"
            src={artifactImage}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {artifactName}
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            <span className="font-semibold">Type : </span>
            {artifactType}
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <AiOutlineLike className="text-blue-500 text-2xl" />
            <span className="text-base font-medium">{like}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link to={`/updateArtifact/${_id}`}>
            <button
              type="button"
              className="inline-flex space-x-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-custom-btn focus:z-10 focus:ring-2 focus:ring-custom-btn focus:text-custom-btn dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <MdBrowserUpdated className="text-lg" />
              <span>Update</span>
            </button>
          </Link>

          <button
            onClick={handleDelete}
            type="button"
            className="inline-flex space-x-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-custom-btn focus:z-10 focus:ring-2 focus:ring-custom-btn focus:text-custom-btn dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <MdDeleteOutline className="text-lg" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
