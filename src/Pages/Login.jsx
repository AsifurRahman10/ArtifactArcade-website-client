import google from "../assets/google.png";
import Lottie from "lottie-react";
import login from "../../public/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
export const Login = () => {
  const { handleGoogleLogin, loginWithEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then((data) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        if (location.state) {
          return navigate(location.state.from);
        }
        navigate("/");
      })
      .catch((err) => {
        const errorText = err.message.slice(15).replace(/[()]/g, "");
        setError(errorText);
      });
  };

  const handleGoogleLoginBtn = (e) => {
    handleGoogleLogin().then((res) => {
      const name = res.user.displayName;
      const email = res.user.email;
      const likedArtifacts = [];
      const userData = { name, email, likedArtifacts };
      axios
        .post("https://artifact-arcade-server.vercel.app/user", userData)
        .then((res) => {
          if (res.data.success) {
            if (location.state) {
              return navigate(location.state.from);
            }

            navigate("/");
          } else {
          }
        });
    });
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center small-text md:w-11/12 mx-auto py-10  max-w-screen-2xl">
      <HelmetProvider>
        <Helmet>
          <title>Login - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex-1 w-11/12 mx-auto">
        <div className="p-4 lg:w-7/12 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLoginWithEmail}>
            <h5 className="text-2xl font-medium text-gray-900 dark:text-white title-text">
              Please login to your account
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label>
              <input
                type="email"
                name="email"
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
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-custom-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 justify-center"
            >
              Login
            </button>
            <button
              onClick={handleGoogleLoginBtn}
              type="submit"
              className="w-full text-white bg-custom-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 justify-center"
            >
              <span>Sign in with</span>{" "}
              <img className="w-10" src={google} alt="" />
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1">
        <Lottie
          className="lg:w-11/12 mx-auto "
          animationData={login}
          loop={true}
        />
      </div>
    </div>
  );
};
