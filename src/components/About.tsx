const techStack = [
  {
    icon: "⚡",
    name: "Vite",
    desc: "Next generation frontend tooling",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🔷",
    name: "TypeScript",
    desc: "JavaScript with syntax for types",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "⚛️",
    name: "React 19",
    desc: "The library for web and native UIs",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "🎨",
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    color: "from-teal-500 to-green-500",
  },
];

const About = () => {
  return (
    <div className="bg-grid min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bf00ff]/30 bg-[#bf00ff]/10 px-4 py-1.5 text-sm text-[#bf00ff]">
            About Us
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Built with
            <span className="bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent">
              {" "}
              passion
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            This application demonstrates the power of modern web technologies.
            Built with cutting-edge tools for optimal performance and developer
            experience.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="mb-6 text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {techStack.map(({ icon, name, desc, color }) => (
              <div
                key={name}
                className="group flex items-start gap-4 rounded-xl border border-gray-800 bg-[#12121a] p-6 transition-all duration-300 hover:border-gray-700"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-xl`}
                >
                  {icon}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-white">{name}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="rounded-xl border border-gray-800 bg-[#12121a] p-8">
          <h2 className="mb-4 text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
            Our Mission
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            To showcase what's possible with modern web development. Every
            pixel, every animation, every interaction is crafted with attention
            to detail and a passion for excellence.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-[#00f5ff]">100%</div>
              <div className="text-sm text-gray-500">Open Source</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00f5ff]">0</div>
              <div className="text-sm text-gray-500">Tracking</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00f5ff]">A+</div>
              <div className="text-sm text-gray-500">Performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
