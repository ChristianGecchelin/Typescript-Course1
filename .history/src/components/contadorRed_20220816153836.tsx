import React from 'react'

const initialState={
    contador:0,
}
type ActionType={
    type:'incrementar',
}

const contadorReducer=(state:typeof initialState,action:ActionType)=>{
    
}

export const contadorRed = () => {
  return (
    <>
    <h2>Contador:</h2>
    </>
  )
}
