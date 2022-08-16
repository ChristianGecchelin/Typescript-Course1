import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
// :void nos indica que la función no regresa nada, sin return
  const incrementar = ():void => {
    setCounter(counter + 1);
  };
  const decrementar = ():void => {
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
      <button className="btn btn-outline-primary mt-2" onClick={decrementar}>-</button>
    </div>
  );
};
