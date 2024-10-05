import logo from "../assets/JR.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Correct imports

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/jayantaroy7">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/iamjayantaroy">
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/i_am_jayanta.roy">
          <FaInstagram className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
