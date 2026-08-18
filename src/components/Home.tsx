import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BoltIcon, ShieldIcon, PaletteIcon, ArrowRightIcon } from "./Icons";

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
    <div className="bg-grid min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        {/* Background glow effects */}
        <motion.div
          className="pointer-events-none absolute top-0 left-1/2 -z-10 h-64 sm:h-96 w-64 sm:w-96 -translate-x-1/2 rounded-full bg-[#00f5ff]/10 blur-[80px] sm:blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute top-20 right-0 -z-10 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-[#bf00ff]/10 blur-[60px] sm:blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-[#00f5ff]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          System Online
        </motion.div>

        <motion.h1
          className="mb-4 sm:mb-6 max-w-3xl text-3xl sm:text-5xl md:text-7xl leading-tight font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Next Gen
          <br />
          <span className="bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent">
            Digital Platform
          </span>
        </motion.h1>

        <motion.p
          className="mb-6 sm:mb-10 max-w-xl text-base sm:text-lg leading-relaxed text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the future of web development. Built with cutting-edge
          technologies for performance, security, and stunning visuals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#00f5ff] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            <span className="relative z-10">Explore Products</span>
            <motion.span
              className="relative z-10 inline-flex"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </motion.span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white no-underline transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
            Features
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Built for the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }, index) => (
            <motion.div
              key={title}
              className="group rounded-xl border border-gray-800 bg-[#12121a] p-6 sm:p-8 transition-all duration-300 hover:border-[#00f5ff]/30 hover:bg-[#1a1a2e]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-3 sm:mb-4 text-[#00f5ff]"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </motion.div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              className="rounded-xl border border-gray-800 bg-[#12121a] p-4 sm:p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="mb-1 text-xl sm:text-2xl font-bold text-[#00f5ff]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                {value}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
