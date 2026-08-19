import { Link } from "react-router-dom";
import { FadeIn } from "../ui";
import { ROUTES } from "../../config/routes";

const ProductActions = () => (
  <FadeIn delay={1.2} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <Link
      to={ROUTES.PRODUCTS}
      className="flex-1 rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-center font-medium text-white no-underline transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
    >
      ← Back
    </Link>
    <Link
      to={ROUTES.LOGIN}
      className="flex-1 rounded-lg bg-[#00f5ff] px-6 py-3 text-center font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
    >
      Sign in to Purchase
    </Link>
  </FadeIn>
);

export default ProductActions;
