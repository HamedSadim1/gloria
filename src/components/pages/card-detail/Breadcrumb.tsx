import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES } from "../../../config/routes";

const Breadcrumb = () => (
  <motion.nav
    className="mb-6 sm:mb-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    aria-label="Breadcrumb"
  >
    <ol className="flex items-center gap-1.5 text-xs sm:text-sm">
      <li>
        <Link
          to={ROUTES.HOME}
          className="text-gray-400 no-underline transition-colors hover:text-white"
        >
          Home
        </Link>
      </li>
      <li className="text-gray-600" aria-hidden="true">
        /
      </li>
      <li>
        <Link
          to={ROUTES.PRODUCTS}
          className="text-gray-400 no-underline transition-colors hover:text-white"
        >
          Products
        </Link>
      </li>
      <li className="text-gray-600" aria-hidden="true">
        /
      </li>
      <li>
        <span className="text-neon-cyan">Details</span>
      </li>
    </ol>
  </motion.nav>
);

export default Breadcrumb;
