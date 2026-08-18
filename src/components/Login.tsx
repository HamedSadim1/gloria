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
    <div className="flex min-h-screen items-center justify-center pt-24">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 text-4xl">✦</div>
          <h2 className="mb-2 text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-sm text-white/60">
            Sign in to access your dashboard
          </p>
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-white/80">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-200 focus:border-white/40 focus:bg-white/15 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-200 focus:border-white/40 focus:bg-white/15 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-xl bg-white/20 py-3.5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg active:scale-[0.98]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
