import { PiLockFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container">
        <h1 className="heading__text">Create an account</h1>
        {/* email */}
        <div className="input__container">
          <FaUser className="icon__style" />
          <input
            type="email"
            placeholder="Username or Email"
            className="input__field"
          />
        </div>
        {/* password */}
        <div className="input__container">
          <PiLockFill className="icon__style" />
          <input
            type="password"
            placeholder="Password"
            className="input__field"
          />
          <FiEye className="icon__style" />
        </div>
        <div className="input__container">
          <PiLockFill className="icon__style" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input__field"
          />
          <FiEye className="icon__style" />
        </div>
        <h3 className="text-applightGray text-xs mt-4 max-w-[16rem]">
          By clicking the <span className="text-appOrange">Register</span>{" "}
          button, you agree to the public offer
        </h3>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <button className="btn" onClick={handleClick}>
            <FaArrowRightLong className="text-xl " />
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
