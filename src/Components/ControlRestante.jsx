import React from "react";
import { determinarClase } from "../helpers/control-restante-helper";

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

export default ControlRestante;
