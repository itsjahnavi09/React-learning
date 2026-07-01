import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Sidebar() {
  const { user } = useContext(UserContext);

  return (
    <div className="box">
      <h2>Sidebar</h2>
      <p>Current User:</p>
      <p>{user.name}</p>
    </div>
  );
}

export default Sidebar;