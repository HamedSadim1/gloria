import { BrandLogo } from "./ui";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-[#0a0a0f] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <BrandLogo size="sm" />
          <span className="mx-2 text-gray-700">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
