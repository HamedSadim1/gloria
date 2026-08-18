const About = () => {
  return (
    <div className="mx-auto mt-32 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <h1 className="mb-4 text-3xl font-bold text-white">About Gloria</h1>
      <p className="mb-6 text-lg leading-relaxed text-white/80">
        This application demonstrates the power of React Router with a stunning
        glassmorphism design. Built with modern web technologies including React
        19, TypeScript, and Vite for optimal performance.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: "⚡", label: "Vite", desc: "Lightning fast" },
          { icon: "🔷", label: "TypeScript", desc: "Type safe" },
          { icon: "🎨", label: "Tailwind", desc: "Modern CSS" },
        ].map(({ icon, label, desc }) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-200 hover:bg-white/10"
          >
            <div className="mb-2 text-2xl">{icon}</div>
            <p className="mb-1 text-sm font-semibold text-white">{label}</p>
            <p className="text-xs text-white/50">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
