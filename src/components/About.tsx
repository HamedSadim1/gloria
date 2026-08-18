import { motion } from "framer-motion";
import { BoltIcon, ShieldIcon, AtomIcon, PaletteIcon } from "./Icons";

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

const About = () => {
  return (
    <div className="bg-grid min-h-screen px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bf00ff]/30 bg-[#bf00ff]/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-[#bf00ff]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Us
          </motion.div>
          <motion.h1
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Built with
            <span className="bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent">
              {" "}
              passion
            </span>
          </motion.h1>
          <motion.p
            className="max-w-2xl text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            This application demonstrates the power of modern web technologies.
            Built with cutting-edge tools for optimal performance and developer
            experience.
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <div className="mb-10 sm:mb-16">
          <motion.h2
            className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            {techStack.map(({ Icon, name, desc, color }, index) => (
              <motion.div
                key={name}
                className="group flex items-start gap-3 sm:gap-4 rounded-xl border border-gray-800 bg-[#12121a] p-4 sm:p-6 transition-all duration-300 hover:border-gray-700"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  className={`flex h-10 sm:h-12 w-10 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${color} text-white`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.span>
                <div>
                  <h3 className="mb-1 font-semibold text-white">{name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <motion.div
          className="rounded-xl border border-gray-800 bg-[#12121a] p-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
            Our Mission
          </h2>
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300">
            To showcase what's possible with modern web development. Every
            pixel, every animation, every interaction is crafted with attention
            to detail and a passion for excellence.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: "100%", label: "Open Source" },
              { value: "0", label: "Tracking" },
              { value: "A+", label: "Performance" },
            ].map(({ value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-lg sm:text-2xl font-bold text-[#00f5ff]">
                  {value}
                </div>
                <div className="text-[10px] sm:text-sm text-gray-500">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
