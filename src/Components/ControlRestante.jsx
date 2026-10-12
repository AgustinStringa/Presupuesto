import React from "react";
import { determinarClase } from "../helpers/control-restante-helper";
import PropTypes from "prop-types";

const ControlRestante = ({ restante, presupuesto }) => {
  const claseAlerta = determinarClase(restante, presupuesto);
  const porcentaje = presupuesto > 0 ? Math.max(0, Math.min(100, Math.round((restante / presupuesto) * 100))) : 0;

  let bgBar = "bg-emerald-500";
  let statusBadge = "bg-emerald-50 text-emerald-700 border-emerald-200";

  if (porcentaje <= 25) {
    bgBar = "bg-rose-500";
    statusBadge = "bg-rose-50 text-rose-700 border-rose-200";
  } else if (porcentaje <= 50) {
    bgBar = "bg-amber-500";
    statusBadge = "bg-amber-50 text-amber-700 border-amber-200";
  }

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Estado del Presupuesto
        </span>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusBadge}`}>
          {porcentaje}% restante
        </span>
      </div>

      <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full transition-all duration-500 ease-out ${bgBar}`}
          style={{ width: `${porcentaje}%` }}
        />
      </div>

      {restante === 0 ? (
        <p className={`${claseAlerta} m-0 rounded-xl p-3 text-center text-sm font-semibold`}>
          Te quedaste sin presupuesto. Expande para continuar
        </p>
      ) : (
        <p className={`${claseAlerta} m-0 rounded-xl p-3 text-center text-sm font-semibold`}>
          El presupuesto restante es de $ {restante}
        </p>
      )}
    </div>
  );
};

ControlRestante.propTypes = {
  restante: PropTypes.number.isRequired,
  presupuesto: PropTypes.number.isRequired,
};

export default ControlRestante;
