import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="box">
      <h2>Dashboard</h2>
      <p>Logged in as:</p>
      <p>{user.role}</p>
    </div>
  );
}

export default Dashboard;