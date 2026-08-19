import { FadeIn, StatusDot } from "../ui";

interface ProductInfoProps {
  id: string;
}

const ProductInfo = ({ id }: ProductInfoProps) => (
  <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4">
    <FadeIn x={-20} delay={0.5} y={0}>
      <div className="rounded-lg border border-gray-800 bg-dark-900 p-3 sm:p-4">
        <div className="mb-1 text-[10px] sm:text-xs text-gray-400">
          Product ID
        </div>
        <div className="font-mono text-[10px] sm:text-sm text-white break-all">
          {id}
        </div>
      </div>
    </FadeIn>
    <FadeIn x={20} delay={0.6} y={0}>
      <div className="rounded-lg border border-gray-800 bg-dark-900 p-3 sm:p-4">
        <div className="mb-1 text-[10px] sm:text-xs text-gray-400">Status</div>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-green-400">
          <StatusDot color="bg-green-400" pulse={false} />
          Active
        </div>
      </div>
    </FadeIn>
  </div>
);

export default ProductInfo;
