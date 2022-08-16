import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milesimas, setMilesimas] = useState(1000);
  return (
    <>
      <span>Milisegundos {milesimas}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilesimas(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilesimas(2000)}
      >
        2000
      </button>
      <Timer milesimas={milesimas}/>
    </>
  );
};
