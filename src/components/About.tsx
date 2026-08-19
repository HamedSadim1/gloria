import { motion } from "framer-motion";
import { BoltIcon, ShieldIcon, AtomIcon, PaletteIcon } from "./Icons";
import {
  PageLayout,
  PageHeader,
  FeatureCard,
  StatCard,
  SectionHeading,
} from "./ui";
import { GRADIENT_TEXT, SECTION_HEADING_CLASS } from "../config/constants";

const techStack = [
  {
    Icon: BoltIcon,
    name: "Vite",
    desc: "Next generation frontend tooling",
    color: "from-purple-500 to-pink-500",
  },
  {
    Icon: ShieldIcon,
    name: "TypeScript",
    desc: "JavaScript with syntax for types",
    color: "from-blue-500 to-cyan-500",
  },
  {
    Icon: AtomIcon,
    name: "React 19",
    desc: "The library for web and native UIs",
    color: "from-cyan-500 to-blue-500",
  },
  {
    Icon: PaletteIcon,
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    color: "from-teal-500 to-green-500",
  },
];

const missionStats = [
  { value: "100%", label: "Open Source" },
  { value: "0", label: "Tracking" },
  { value: "A+", label: "Performance" },
];

const About = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <PageHeader
          badge="About Us"
          title={
            <>
              Built with
              <span className={GRADIENT_TEXT}> passion</span>
            </>
          }
          description="This application demonstrates the power of modern web technologies. Built with cutting-edge tools for optimal performance and developer experience."
        />

        {/* Tech Stack */}
        <section
          className="mb-10 sm:mb-16"
          aria-labelledby="tech-stack-heading"
        >
          <SectionHeading label="Tech Stack" id="tech-stack-heading" viewport />
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            {techStack.map(({ Icon, name, desc, color }, index) => (
              <FeatureCard
                key={name}
                Icon={Icon}
                title={name}
                desc={desc}
                index={index}
                iconColor={color}
                iconSize="sm"
              />
            ))}
          </div>
        </section>

        {/* Mission */}
        <motion.section
          className="rounded-xl border border-gray-800 bg-[#12121a] p-5 sm:p-8 mb-16 sm:mb-20"
          aria-labelledby="mission-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="mission-heading" className={SECTION_HEADING_CLASS}>
            Our Mission
          </h2>
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300">
            To showcase what's possible with modern web development. Every
            pixel, every animation, every interaction is crafted with attention
            to detail and a passion for excellence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            {missionStats.map(({ value, label }, index) => (
              <StatCard
                key={label}
                value={value}
                label={label}
                index={index}
                viewport
                centered={false}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default About;
