import { useEffect, useState } from "react";

type TimerProps ={
    milesimas:number
}

export const Timer = (props:TimerProps) => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    setInterval(() => setSegundos((s) => s + 0.5), 1000);
  }, []);
  return <h4>Timer: {segundos} </h4>;
};
