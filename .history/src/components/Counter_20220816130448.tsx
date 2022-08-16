import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)




  return (
    <div className="mt-5">
      <h3>Counter - useState
      </h3>
      <span>Valor: {counter}</span>
      <br />
      <button className="btn-danger p-5">+</button>
        <button className="btn-danger p-5">-</button>
    </div>
  );
};
