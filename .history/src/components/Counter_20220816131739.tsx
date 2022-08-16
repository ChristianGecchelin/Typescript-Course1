import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  // :void nos indica que la función no regresa nada, sin return
  const incrementar = (numero:number): void => {
    setCounter(counter + numero);
  };
  const decrementar = (): void => {
    setCounter(counter - 1);
  };
  const reset =():void=>{
    setCounter(0)
  }
  return (
    <div className="mt-5">
      <h3>Counter - useState</h3>
      <span>Valor: {counter}</span>
      <br />
      <button className="btn btn-outline-primary mt-2" onClick={()=>incrementar(1)}>
        +1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={()=>incrementar(2)}>
        +2
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={decrementar}>
        -
      </button>
      <button className="btn btn-outline-danger mt-2" onClick={reset}>Reset</button>
    </div>
  );
};
