import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    localStorage.setItem("name", name);
    setName("");
    setEmail("");
    navigate("/dashboard");
  };

  return (
    <div className="bg-grid flex min-h-screen items-center justify-center px-6 pt-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bf00ff]/10 blur-[120px]" />

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-2xl text-[#00f5ff]">
            ◆
          </div>
          <h1 className="mb-2 text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your dashboard
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-800 bg-[#12121a] p-8"
        >
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-700 bg-[#0a0a0f] px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff]/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-700 bg-[#0a0a0f] px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff]/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#00f5ff] py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:brightness-110 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-[#00f5ff] no-underline hover:underline">
            Contact Admin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
