import React from "react";

const ExpandirPresupuesto = ({ expandirPresupuesto }) => {
  return (
    <div className="campo">
      <form onSubmit={expandirPresupuesto}>
        <label htmlFor="">Expande tu presupuesto</label>
        <input type="number" className="u-full-width input-expandir" />

        <input
          type="submit"
          value="expandir"
          className="button-primary u-full-width"
        />
      </form>
    </div>
  );
};

export default ExpandirPresupuesto;
