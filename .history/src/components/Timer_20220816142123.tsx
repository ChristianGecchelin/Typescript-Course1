import { useEffect, useState } from "react";

type TimerProps ={
    milesimas:number
}

export const Timer = ({milesimas}:TimerProps) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    setInterval(() => setSegundos((s) => s + 0.5), milesimas);
  }, []);
  return <h4>Timer: {segundos} </h4>;
};
