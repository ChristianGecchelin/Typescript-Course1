import React, { ChangeEvent, useState } from "react";
import { json } from "stream/consumers";
import { useForm } from "../hooks/useForm";

interface FormData{
    email:string,
    nombre:string,
    edad:number
}

export const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    email: "",
    nombre: "",
    edad: 1
  });

  return (
    <>
      <form action="" autoComplete="off">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            onChange={handleChange}
          />
        </div>
      </form>
      <pre>{JSON.stringify(formulario)}</pre>
    </>
  );
};
