import { Link } from "react-router-dom";
import { FadeIn } from "@/components/ui";
import { ROUTES } from "@/config/routes";

const ProductActions = () => (
  <FadeIn delay={1.2} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <Link
      to={ROUTES.PRODUCTS}
      className="flex-1 rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-center font-medium text-white no-underline transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
    >
      ← Back
    </Link>
    <Link
      to={ROUTES.LOGIN}
      className="flex-1 rounded-lg bg-neon-cyan px-6 py-3 text-center font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
    >
      Sign in to Purchase
    </Link>
  </FadeIn>
);

export default ProductActions;
