import { FaUser, FaApple, FaFacebookF } from "react-icons/fa";

import { PiLockFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container">
        <h1 className="heading__text">Welcome Back!</h1>
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
        </div>
        <h3 className="frgt__pwsd">Forgot Password?</h3>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <button className="btn">
            <FaArrowRightLong className="text-xl " />
          </button>
        </div>
        <div className="mt-10">
          <p className="text-applightGray text-center text-sm">Sign in with</p>
          <div className="flex justify-center gap-5 mt-4">
            <FcGoogle className="logos" />
            <FaApple className="logos" />
            <FaFacebookF className="logos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
