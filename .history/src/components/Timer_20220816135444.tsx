import { useEffect, useState } from "react"

export const Timer = () => {

    const [segundos, setSegundos] = useState(0)
    useEffect(() => {
      setInterval(()=>{
        setSegundos(segundos+1)
      },1000)
      
    }, [])
    
  return (
    <h4>Timer: 0 </h4>
  )
}
