import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="mt-10">
      <p className="text-applightGray text-center text-sm">Sign in with</p>
      <div className="flex justify-center gap-5 mt-4">
        <FcGoogle className="logos" />
        <FaApple className="logos" />
        <FaFacebookF className="logos" />
      </div>
    </div>
  );
};

export default Footer;
