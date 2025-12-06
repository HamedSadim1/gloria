import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>
        Welcome{" "}
        <span style={{ color: "red" }}>{localStorage.getItem("name")}</span>
      </h1>
    </div>
  );
};

export default Dashboard;
