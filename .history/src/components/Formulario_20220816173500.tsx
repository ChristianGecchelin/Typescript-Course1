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
    <form action="" autoComplete='off'>

        <div className='mb-3'>
            <label htmlFor="" className='form-label'>Email:</label>
            <input type="email" className='form-control' name='email' onChange={handleChange}/>
            
        </div>
    </form>
    
  )
}
