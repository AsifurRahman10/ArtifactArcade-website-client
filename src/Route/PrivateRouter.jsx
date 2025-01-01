import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingImg from "../../public/loading.json";
import { AuthContext } from "../Provider/AuthProvider";

export const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="mix-h-screen w-full">
        <Lottie
          className="w-1/3 mx-auto"
          animationData={loadingImg}
          loop={true}
        />
      </div>
    );
  }
  if (!user) {
    navigate("/login");
  }

  return <div>{children}</div>;
};
