import { motion } from "framer-motion";
import {
  BoltIcon,
  ShieldIcon,
  AtomIcon,
  PaletteIcon,
  PageLayout,
  PageHeader,
  FeatureCard,
  StatCard,
  SectionHeading,
} from "@/components/ui";
import { GRADIENT_TEXT, SECTION_HEADING_CLASS, ANIM } from "@/config/constants";
import { SEO } from "@/config/seo";
import Seo from "@/components/seo/Seo";
import { personSchema } from "@/utils";

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
      <Seo
        title={`${SEO.PERSON.NAME} — ${SEO.PERSON.JOB_TITLE}`}
        description={`${SEO.PERSON.NAME} is a ${SEO.PERSON.JOB_TITLE} specializing in React, Next.js, TypeScript and C#. Meet the developer behind the GLORIA platform.`}
        path="/about"
        jsonLd={personSchema()}
      />
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

        {/* Developer */}
        <section className="mb-10 sm:mb-16" aria-labelledby="developer-heading">
          <SectionHeading label="Developer" id="developer-heading" viewport />
          <div className="rounded-xl border border-gray-800 bg-dark-800 p-5 sm:p-8">
            <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">
              {SEO.PERSON.NAME}
              <span className="ml-2 align-middle text-xs sm:text-sm font-normal text-neon-cyan">
                {SEO.PERSON.JOB_TITLE}
              </span>
            </h3>
            <p className="mb-5 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-300">
              Full-Stack Web Developer with hands-on experience in React,
              Next.js, TypeScript and C#, passionate about building scalable web
              applications and crafting user-friendly interfaces.
            </p>
            <a
              href="https://github.com/HamedSadim1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-white no-underline transition-colors hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
            >
              GitHub Profile
            </a>
          </div>
        </section>

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
          className="rounded-xl border border-gray-800 bg-dark-800 p-5 sm:p-8 mb-16 sm:mb-20"
          aria-labelledby="mission-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIM.FADE }}
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
