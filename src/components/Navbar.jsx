import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div className="box">
      <h2>Navbar</h2>
      <p>Welcome, {user.name}</p>
      <p>{user.role}</p>
    </div>
  );
}

export default Navbar;