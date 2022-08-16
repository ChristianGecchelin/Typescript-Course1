import { useState } from "react";

export const Usuario = () => {
  const [user, setUser] = useState({});

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Christian,",
    });
  };

  return (
    <div>
      <h3>User {JSON.stringify(user)}</h3>
      <button className="btn btn-outline-primary">Login</button>
    </div>
  );
};
