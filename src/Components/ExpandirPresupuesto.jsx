import React from "react";
import PropTypes from "prop-types";

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
/**
 * expandirPresupuesto: es una funcion que actualiza el state principal de la App (presupuesto).
 */
ExpandirPresupuesto.propTypes = {
  expandirPresupuesto: PropTypes.func.isRequired,
};

export default ExpandirPresupuesto;
