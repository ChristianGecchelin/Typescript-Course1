import { useState } from "react";

interface User {
    uid:string,
    name:string,
}

export const Usuario = () => {
    // declaro que el state debe cumplir con lo declarado en la interface User
  const [user, setUser] = useState<User>({
    uid:'123',
    name:'Blaise',
  });

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
