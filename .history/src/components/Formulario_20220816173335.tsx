import React, { ChangeEvent, useState } from 'react'

export const Formulario = () => {

    const[formulario,setFormulario]=useState({
        email:'',
        nombre:'',
    })

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=target;
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

  return (
    <form action="" autoComplete='off'></form>
    
  )
}
