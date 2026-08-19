import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout, AmbientGlow, Badge, FadeIn } from "../ui";
import { ROUTES } from "../../config/routes";
import { ANIM } from "../../config/constants";

const ErrorPage = () => {
  return (
    <PageLayout>
      <AmbientGlow color="bg-red-500/10" duration={6} />

      <div className="mx-auto w-full max-w-md text-center">
        <motion.div
          className="mb-4 sm:mb-6 text-6xl sm:text-8xl font-bold tracking-tighter text-gray-600"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: ANIM.FADE, type: "spring", stiffness: 100 }}
        >
          404
        </motion.div>

        <Badge variant="red" showDot>
          Error
        </Badge>

        <FadeIn delay={0.4} y={20} className="mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Page Not Found
          </h1>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-400">
            The page you're looking for doesn't exist or has been moved to a
            different location.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} y={20}>
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-6 sm:px-8 py-3 font-semibold text-sm text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            Return Home →
          </Link>
        </FadeIn>
      </div>
    </PageLayout>
  );
};

export default ErrorPage;
