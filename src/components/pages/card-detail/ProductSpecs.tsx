import { FadeIn, SpecRow } from "@/components/ui";
import { SECTION_HEADING_CLASS } from "@/config/constants";
import type { ProductSpec } from "@/models/Data";
import { cn } from "@/utils";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

const ProductSpecs = ({ specs }: ProductSpecsProps) => (
  <FadeIn delay={0.8} className="mb-6 sm:mb-8">
    <h2 className={cn(SECTION_HEADING_CLASS, "mb-3")}>Specifications</h2>
    <div className="space-y-2">
      {specs.map(({ label, value }, specIndex) => (
        <SpecRow key={label} label={label} value={value} index={specIndex} />
      ))}
    </div>
  </FadeIn>
);

export default ProductSpecs;
