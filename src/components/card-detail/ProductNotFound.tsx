import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { PageLayout, FadeIn } from "../ui";

const ProductNotFound = () => (
  <PageLayout>
    <div className="mx-auto max-w-md text-center">
      <FadeIn y={20} className="mb-4">
        <h1 className="text-2xl font-bold text-white">Product Not Found</h1>
      </FadeIn>
      <FadeIn delay={0.1} y={20} className="mb-6">
        <p className="text-gray-400">
          The product you're looking for doesn't exist.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} y={20}>
        <Link
          to={ROUTES.PRODUCTS}
          className="inline-flex items-center gap-2 rounded-lg bg-[#00f5ff] px-6 py-3 font-semibold text-sm text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
        >
          ← Back to Products
        </Link>
      </FadeIn>
    </div>
  </PageLayout>
);

export default ProductNotFound;
