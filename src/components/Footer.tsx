import { DiamondIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-[#0a0a0f] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-[#00f5ff]">
            <DiamondIcon className="h-4 w-4" />
          </span>
          <span>
            GLORIA<span className="text-[#00f5ff]">.</span>
          </span>
          <span className="mx-2 text-gray-700">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a
            href="#"
            className="no-underline transition-colors hover:text-white"
          >
            Privacy
          </a>
          <a
            href="#"
            className="no-underline transition-colors hover:text-white"
          >
            Terms
          </a>
          <a
            href="#"
            className="no-underline transition-colors hover:text-[#00f5ff]"
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
