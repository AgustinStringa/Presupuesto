import React, { useState } from "react";
import Error from "./Error";

const InputPresupuesto = ({ setPresupuesto, setRestante }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = () => {
    const value = Number(
      document.querySelector("#input-presupuesto").value.trim()
    );
    setCantidad(value);
    setError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!cantidad || cantidad <= 0) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };
  return (
    <>
      <div className="u-full-width">
        {error ? (
          <Error msg={`El presupuesto ${cantidad} no es válido`} />
        ) : null}

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="input-presupuesto" className="input-presupuesto">
            Ingresa tu presupuesto semanal (en pesos)
          </label>

          <input
            type="number"
            id="input-presupuesto"
            className="u-full-width"
            placeholder="Establezca su presupuesto"
            onChange={definirPresupuesto}
          />
          <button type="submit" className="button-primary u-full-width">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default InputPresupuesto;
