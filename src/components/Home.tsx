const Home = () => {
  return (
    <div className="mx-auto mt-32 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
        Welcome to Gloria
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-white/80">
        A modern React application showcasing glassmorphism UI design with
        stunning visual effects. Explore our features through the navigation
        above.
      </p>
      <div className="flex gap-3">
        <a
          href="/contact"
          className="rounded-xl bg-white/20 px-6 py-3 font-medium text-white no-underline backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg"
        >
          View Products →
        </a>
        <a
          href="/about"
          className="rounded-xl border border-white/30 px-6 py-3 font-medium text-white no-underline transition-all duration-200 hover:bg-white/10"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
