import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, changeUser } = useContext(UserContext);

  return (
    <div className="box">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button onClick={changeUser}>Change User</button>
    </div>
  );
}

export default Profile;