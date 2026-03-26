function Alerta({ mensaje, tipo }) {
  if (!mensaje) return null;

  const estilo = {
    padding: "10px",
    marginTop: "10px",
    color: "white",
    backgroundColor: tipo === "success" ? "green" : "red"
  }

  return (
    <div style={estilo}>
      {mensaje}
    </div>
  )
}

export default Alerta