import { Link } from "react-router-dom";
import google from "../assets/google.png";
import Lottie from "lottie-react";
import register from "../../public/register.json";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
export const Register = () => {
  const { handleGoogleLogin, registerWithEmail, addProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    registerWithEmail(email, password)
      .then((data) => {
        const formData = new FormData();
        formData.append("image", image);
        axios
          .post(
            "https://api.imgbb.com/1/upload?key=0e19a3d519d57f6985d8f61637db8a0a",
            formData
          )
          .then((res) => {
            if (res?.data?.data?.display_url) {
              const image = res.data.data.display_url;
              console.log(image);
              addProfile(name, image);
            }
          });
      })
      .catch((err) => {
        const errorText = err.message.slice(15).replace(/[()]/g, "");
        setError(errorText);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center small-text">
        <div className="flex-1">
          <div className="p-4 lg:w-7/12 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleRegister}>
              <h5 className="text-2xl font-medium text-gray-900 dark:text-white title-text">
                Create a new account
              </h5>
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload file
                </label>
                <input
                  name="image"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-custom-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 justify-center"
              >
                Sign Up
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <button
                onClick={handleGoogleLogin}
                type="submit"
                className="w-full text-white bg-custom-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 justify-center"
              >
                <span>Sign in with</span>{" "}
                <img className="w-10" src={google} alt="" />
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <Lottie className="" animationData={register} loop={true} />
        </div>
      </div>
    </div>
  );
};
