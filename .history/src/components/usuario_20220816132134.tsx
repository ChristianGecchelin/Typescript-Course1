import { useState } from "react"

export const Usuario = () => {
    const [user, setUser] = useState()



  return (
    <div>
        <h3>user {user}</h3>
        <button className="btn btn-outline-primary"></button>
    </div>
  )
}
