import { useEffect, useRef, useState } from "react";

type TimerProps ={
    milesimas:number
}

export const Timer = ({milesimas}:TimerProps) => {
  const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>()
  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current=setInterval(() => setSegundos((s) => s + 1), milesimas);
  }, [milesimas]);
  return <h4>Timer: {segundos} </h4>;
};
