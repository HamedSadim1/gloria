import { Link } from "react-router-dom";
import { DiamondIcon } from "./Icons";
import { ROUTES } from "../config/routes";
import { BRAND } from "../config/constants";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-[#0a0a0f] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-[#00f5ff]">
            <DiamondIcon className="h-4 w-4" />
          </span>
          <Link to={ROUTES.HOME} className="no-underline">
            <span className="text-gray-400 transition-colors hover:text-white">
              {BRAND}
              <span className="text-[#00f5ff]">.</span>
            </span>
          </Link>
          <span className="mx-2 text-gray-700">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
