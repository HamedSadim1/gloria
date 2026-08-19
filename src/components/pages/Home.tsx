import { Link } from "react-router-dom";
import {
  BoltIcon,
  ShieldIcon,
  PaletteIcon,
  PageLayout,
  AmbientGlow,
  Badge,
  FadeIn,
  BouncingArrow,
  StatCard,
  SectionHeading,
  FeatureCard,
} from "../ui";
import { ROUTES } from "../../config/routes";
import { GRADIENT_TEXT } from "../../config/constants";
import { SEO } from "../../config/seo";
import Seo from "../seo/Seo";
import { organizationSchema, websiteSchema } from "../../utils";

const features = [
  {
    Icon: BoltIcon,
    title: "Lightning Fast",
    desc: "Built with Vite for instant HMR and blazing builds",
  },
  {
    Icon: ShieldIcon,
    title: "Type Safe",
    desc: "Full TypeScript coverage for reliable code",
  },
  {
    Icon: PaletteIcon,
    title: "Modern Design",
    desc: "Glassmorphism UI with neon accents",
  },
];

const stats = [
  { value: "100%", label: "TypeScript" },
  { value: "v19", label: "React" },
  { value: "<1s", label: "Build Time" },
  { value: "0", label: "Tracking*" },
];

const Home = () => {
  return (
    <PageLayout>
      <Seo
        title={SEO.DEFAULT_TITLE}
        description={SEO.DEFAULT_DESCRIPTION}
        path="/"
        jsonLd={[websiteSchema(), organizationSchema()]}
      />
      <AmbientGlow className="top-0 left-1/2 -translate-x-1/2" />
      <AmbientGlow
        color="bg-neon-purple/10"
        className="top-20 right-0"
        duration={10}
      />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl py-8 sm:py-12">
        <Badge showDot>System Online</Badge>

        <FadeIn
          delay={0.2}
          className="mb-4 sm:mb-6 max-w-3xl text-3xl sm:text-5xl md:text-6xl leading-tight font-bold tracking-tight text-white"
        >
          <h1>
            Next Gen
            <br />
            <span className={GRADIENT_TEXT}>Digital Platform</span>
          </h1>
        </FadeIn>

        <FadeIn
          delay={0.4}
          y={30}
          className="mb-6 sm:mb-10 max-w-xl text-base sm:text-lg leading-relaxed text-gray-400"
        >
          <p>
            Experience the future of web development. Built with cutting-edge
            technologies for performance, security, and stunning visuals.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.6}
          y={30}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
        >
          <Link
            to={ROUTES.PRODUCTS}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-neon-cyan px-6 sm:px-8 py-3 font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            <span className="relative z-10">Explore Products</span>
            <BouncingArrow className="relative z-10 inline-flex" />
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-transparent px-6 sm:px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
          >
            Learn More
          </Link>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="relative mx-auto max-w-5xl py-12 sm:py-16">
        <SectionHeading
          label="Features"
          title="Built for the future"
          viewport
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }, index) => (
            <FeatureCard
              key={title}
              Icon={Icon}
              title={title}
              desc={desc}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative mx-auto max-w-5xl py-12 sm:py-16 pb-20 sm:pb-24">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <StatCard
              key={label}
              value={value}
              label={label}
              index={index}
              viewport
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
