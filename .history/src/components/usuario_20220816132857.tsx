import { useState } from "react";

interface User {
    uid:string,
    name:string,
}

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
      <button className="btn btn-outline-primary" onClick={login}>Login</button>
    </div>
  );
};
