import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = () => {
    setCounter(counter + 1);
  };
  const decrementar = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="mt-5">
      <h3>Counter - useState</h3>
      <span>Valor: {counter}</span>
      <br />
      <button className="btn btn-outline-primary mt-2" onClick={incrementar}>
        +
      </button>
      <button className="btn btn-outline-primary mt-2">-</button>
    </div>
  );
};
