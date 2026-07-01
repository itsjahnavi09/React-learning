import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Jahnavi Singh",
    email: "jahnavi@gmail.com",
    role: "Frontend Intern",
  });

  function changeUser() {
    setUser({
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Software Engineer",
    });
  }

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;