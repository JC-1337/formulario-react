import './App.css'
import { useState } from "react"
import Formulario from "./Formulario"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mensaje, setMensaje] = useState("")
  const [tipo, setTipo] = useState("")

  const actualizarAlerta = (nuevoMensaje, nuevoTipo) => {
    setMensaje(nuevoMensaje)
    setTipo(nuevoTipo)
  }

  return (
    <>
      <Formulario onAlerta={actualizarAlerta} mensaje={mensaje} tipo={tipo} />
    </>
  )
}

export default App