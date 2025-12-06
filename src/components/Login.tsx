import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setName("");
    setEmail("");
    navigate("/dashboard");
    localStorage.setItem("name", name);
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="glass login-form">
        <h3 className="text-white login-title">Welcome Back</h3>
        <div className="form-group">
          <label className="text-white form-label">Username</label>
          <input
            type="text"
            className="glass-input width-100 box-sizing-border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group form-group-last">
          <label className="text-white form-label">Email</label>
          <input
            type="email"
            className="glass-input width-100 box-sizing-border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button
          className="glass-button width-100 padding-1 border-none cursor-pointer btn-primary"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
