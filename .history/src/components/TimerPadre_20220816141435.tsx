import { Timer } from "./Timer"

export const TimerPadre = () => {
  return (
    <>
    <span>Milisegundos {1000}</span>
    <br />
    <button className="btn btn-outline-success">1000</button>
    <button className="btn btn-outline-success">2000</button>
    <Timer/>
    </>
  )
}
