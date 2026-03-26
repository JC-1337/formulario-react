import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alerta";

function Formulario(props) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValido = formData.email.includes("@") && formData.email.includes(".");

    if (!formData.nombre || !formData.email || !formData.contrasena) {
      props.onAlerta("Debes completar todos los campos", "error");
    } else if (!emailValido) {
      props.onAlerta("El email no es válido", "error");
    } else {
      props.onAlerta("Registro exitoso", "success");
    }

    /*console.log(formData)*/
  };

  return (
    <div className="form-container">
      <Form className="formulario" onSubmit={handleSubmit}>
        <p>Crea una cuenta</p>
        <div className="social-icons">
          <img src="/facebook.svg" alt="" />
          <img src="/github.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
        </div>
        <p>O usa tu email para registrarte</p>

        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            type="text"
            name="nombre"
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, contrasena: e.target.value })
            }
            type="password"
            name="contrasena"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
        
        <Alerta mensaje={props.mensaje} tipo={props.tipo} />
      </Form>
    </div>
  );
}

export default Formulario;
