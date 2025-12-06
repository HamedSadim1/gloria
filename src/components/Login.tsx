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
    <>
      <form onSubmit={handleSubmit}>
        <div className="ui raised very padded text container segment">
          <h3 className="ui header">Login</h3>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="email"
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
