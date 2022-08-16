import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="mt-5">
      <h3>Counter - useState</h3>
      <span>Valor: {counter}</span>
      <br />
      <button className="btn btn-outline-primary mt-2">+</button>
      <button className="btn btn-outline-primary mt-2">-</button>
    </div>
  );
};
