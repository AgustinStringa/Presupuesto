import React from "react";
import { determinarClase } from "../helpers/control-restante-helper";
import PropTypes from "prop-types";

const ControlRestante = ({ restante, presupuesto }) => {
  const claseAlerta = determinarClase(restante, presupuesto);
  if (restante === 0) {
    return (
      <p className={claseAlerta}>
        {" "}
        Te quedaste sin presupuesto. Expande para continuar
      </p>
    );
  } else {
    return (
      <p className={claseAlerta}> El presupuesto restante es de $ {restante}</p>
    );
  }
};
/**
 * ambos valores son los del state de la App. Son necesarios para determinar el mensaje de alerta al realizar gastos
 */
ControlRestante.propTypes = {
  restante: PropTypes.number.isRequired,
  presupuesto: PropTypes.number.isRequired,
};
export default ControlRestante;
