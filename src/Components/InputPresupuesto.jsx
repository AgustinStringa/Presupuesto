import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const PRESET_AMOUNTS = [50, 80, 100, 150];

const InputPresupuesto = ({ setPresupuesto, setRestante }) => {
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    const value = e.target.value;
    setCantidad(value);
    if (error) setError(false);
  };

  const aplicarPreset = (monto) => {
    setCantidad(monto);
    if (error) setError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const num = Number(cantidad);
    if (!num || num <= 0) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(num);
    setRestante(num);
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
        {/* Header Icon & Title */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-8 ring-blue-50/50">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
            Inicia tu Presupuesto
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Define el monto semanal disponible para controlar tus finanzas
          </p>
        </div>

        {error ? (
          <div className="mb-4">
            <Error msg={`El presupuesto ingresado no es válido. Debe ser mayor a 0.`} />
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="input-presupuesto"
              className="input-presupuesto mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Presupuesto semanal (en pesos)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-lg font-bold text-slate-400">
                $
              </span>
              <input
                type="number"
                id="input-presupuesto"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pr-4 pl-9 text-base font-semibold text-slate-800 transition-all outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15"
                placeholder="Ej: 25000"
                value={cantidad}
                onChange={definirPresupuesto}
                min="1"
                step="any"
              />
            </div>
          </div>

          {/* Preset Buttons */}
          <div>
            <span className="mb-2 block text-xs font-medium text-slate-500">
              O elige un monto sugerido:
            </span>
            <div className="grid grid-cols-4 gap-2">
              {PRESET_AMOUNTS.map((monto) => (
                <button
                  key={monto}
                  type="button"
                  onClick={() => aplicarPreset(monto)}
                  className={`rounded-lg border px-2 py-1.5 text-xs font-semibold transition-all ${
                    Number(cantidad) === monto
                      ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  ${monto.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 px-6 font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35 active:translate-y-0"
          >
            <span>Comenzar Presupuesto</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

InputPresupuesto.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
};

export default InputPresupuesto;
