import React, { useState } from "react";
import Error from "./Error";
import { generate } from "shortid";

const FormularioGastos = ({ restante, addSpending }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (evt) => {
    evt.preventDefault();

    if (!nombre || cantidad <= 0 || isNaN(cantidad) || cantidad > restante) {
      alert("puede que estes intentando gastar mas de lo que te queda");
      setError(true);
      return;
    }
    setError(false);

    const nuevoGasto = { nombre, cantidad, id: generate(), fecha: new Date() };
    addSpending(nuevoGasto);
    //limpiar formulario
    setNombre("");
    setCantidad(0);
  };
  return (
    <>
      <h2>Ingresa tus gastos aquí</h2>
      <form action="" onSubmit={agregarGasto}>
        {error ? (
          <Error
            msg={"comprueba que todos los valores sean correctos. "}
            br={[
              "No puedes insertar nombres vacíos",
              "La cantidad debe ser mayor a 0",
              "No puedes gastar más del presupuesto restante",
            ]}
          />
        ) : null}
        <div className="campo">
          <label htmlFor="">Nombre gasto</label>
          <input
            type="text"
            name=""
            id=""
            className="u-full-width"
            placeholder="ej: transporte"
            value={nombre}
            disabled={restante === 0 ? true : false}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="">Cantidad: </label>
          <input
            type="number"
            name=""
            id=""
            className="u-full-width"
            placeholder="ej: 25"
            value={cantidad}
            disabled={restante === 0 ? true : false}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <input
          type="submit"
          disabled={restante === 0 ? true : false}
          value="AGREGAR GASTO"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
};

export default FormularioGastos;
