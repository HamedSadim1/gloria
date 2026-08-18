import { Link } from "react-router-dom";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Built with Vite for instant HMR and blazing builds",
  },
  {
    icon: "🔒",
    title: "Type Safe",
    desc: "Full TypeScript coverage for reliable code",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    desc: "Glassmorphism UI with neon accents",
  },
];

const Home = () => {
  return (
    <div className="bg-grid min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00f5ff]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-20 right-0 -z-10 h-64 w-64 rounded-full bg-[#bf00ff]/10 blur-[100px]" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 px-4 py-1.5 text-sm text-[#00f5ff]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00f5ff]" />
          System Online
        </div>

        <h1 className="mb-6 max-w-3xl text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
          Next Gen
          <br />
          <span className="bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent">
            Digital Platform
          </span>
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
          Experience the future of web development. Built with cutting-edge
          technologies for performance, security, and stunning visuals.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#00f5ff] px-8 py-4 font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            <span className="relative z-10">Explore Products</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-8 py-4 font-semibold text-white no-underline transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
            Features
          </h2>
          <p className="text-3xl font-bold text-white">Built for the future</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-800 bg-[#12121a] p-8 transition-all duration-300 hover:border-[#00f5ff]/30 hover:bg-[#1a1a2e]"
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "100%", label: "TypeScript" },
            { value: "v19", label: "React" },
            { value: "<1s", label: "Build Time" },
            { value: "0", label: "Dependencies*" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-800 bg-[#12121a] p-6 text-center"
            >
              <div className="mb-1 text-2xl font-bold text-[#00f5ff]">
                {value}
              </div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
