import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
import { Formulario } from '../src/components/Formulario';

function App() {
  return (
    <>
      <h1>Hola Genio</h1>
      <hr />
      <Counter />
      <hr />
      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
      <ContadorRed/>
      <hr />
      <Formulario>
    </>
  );
}

export default App;
