import { FadeIn } from "@/components/ui";
import { SECTION_HEADING_CLASS } from "@/config/constants";
import { cn } from "@/utils";

interface ProductDescriptionProps {
  name: string;
}

const ProductDescription = ({ name }: ProductDescriptionProps) => (
  <FadeIn delay={0.7} className="mb-6 sm:mb-8">
    <h2 className={cn(SECTION_HEADING_CLASS, "mb-3")}>Description</h2>
    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      This is a premium {name.toLowerCase()} designed with quality and style in
      mind. Crafted using the finest materials and cutting-edge manufacturing
      processes, this product represents the perfect blend of form and function.
    </p>
  </FadeIn>
);

export default ProductDescription;
