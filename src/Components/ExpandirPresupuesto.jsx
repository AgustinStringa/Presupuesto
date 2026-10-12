import React from "react";
import PropTypes from "prop-types";

const ExpandirPresupuesto = ({ expandirPresupuesto }) => {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-slate-800">
          Ampliar Presupuesto
        </h3>
      </div>

      <form onSubmit={expandirPresupuesto} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-bold text-slate-400">
            $
          </span>
          <input
            type="number"
            placeholder="Monto adicional..."
            min="1"
            className="input-expandir w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pr-3 pl-8 text-sm font-medium text-slate-800 transition-all outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-600/15"
          />
        </div>
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-slate-700 active:scale-98"
        >
          <span>Sumar Fondos</span>
        </button>
      </form>
    </div>
  );
};

ExpandirPresupuesto.propTypes = {
  expandirPresupuesto: PropTypes.func.isRequired,
};

export default ExpandirPresupuesto;
