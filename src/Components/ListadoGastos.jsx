import React from "react";
import PropTypes from "prop-types";
import { formatDate, formatTime } from "../../shared";

const ListadoGastos = ({ gastos = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800">Tus Gastos</h2>
            <p className="text-xs text-slate-500">Historial de movimientos</p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {gastos.length} {gastos.length === 1 ? "registro" : "registros"}
        </span>
      </div>

      <ul className="gastos-realizados divide-y divide-slate-100">
        {gastos.length === 0 ? (
          <li className="py-8 text-center text-sm text-slate-400">
            No has agregado ningún gasto todavía.
          </li>
        ) : (
          gastos.map((gasto) => (
            <li
              className="gastos flex items-center justify-between py-3 transition-colors hover:bg-slate-50/50"
              key={gasto.id}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-slate-800">
                  {gasto.nombre}
                </span>
                <span className="fecha-gasto text-xs text-slate-400">
                  {formatDate(gasto.fecha, "DD/MM/YYYY")} {formatTime(gasto.fecha)}
                </span>
              </div>
              <span className="gasto inline-flex items-center rounded-xl bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700 ring-1 ring-rose-200/80">
                ${gasto.cantidad}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default ListadoGastos;
