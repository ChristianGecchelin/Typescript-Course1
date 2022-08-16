import React, { useReducer } from "react";

const initialState = {
  contador: 0,
};
type ActionType =
  | {
      type: "incrementar";
    }
  | { type: "decrementar" };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {contadorState.contador}</h2>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => {
          dispatch({ type: "incrementar" });
        }}
      >
        Incrementar
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => {
          dispatch({ type: "decrementar" });
        }}
      >
        Decrementar
      </button>
    </>
  );
};
