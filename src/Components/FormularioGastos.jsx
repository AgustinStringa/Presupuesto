import React, { useState } from "react";
import Error from "./Error";
import { generate } from "shortid";
import PropTypes from "prop-types";

const FormularioGastos = ({ restante, addSpending }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  const agregarGasto = (evt) => {
    evt.preventDefault();
    const cantNum = Number(cantidad);

    if (!nombre.trim() || !cantNum || cantNum <= 0 || isNaN(cantNum) || cantNum > restante) {
      setError(true);
      return;
    }
    setError(false);

    const nuevoGasto = {
      nombre: nombre.trim(),
      cantidad: cantNum,
      id: generate(),
      fecha: new Date(),
    };
    addSpending(nuevoGasto);

    // Limpiar formulario
    setNombre("");
    setCantidad("");
  };

  const sinFondos = restante <= 0;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-800">
            Ingresa tus gastos aquí
          </h2>
          <p className="text-xs text-slate-500">
            Registra una nueva salida de dinero
          </p>
        </div>
      </div>

      <form onSubmit={agregarGasto} className="space-y-4">
        {error ? (
          <Error
            msg="Comprueba que todos los valores sean correctos:"
            br={[
              "No puedes insertar nombres vacíos",
              "La cantidad debe ser mayor a 0",
              "No puedes gastar más del presupuesto restante",
            ]}
          />
        ) : null}

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            Nombre del gasto
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </span>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pr-4 pl-10 text-sm font-medium text-slate-800 transition-all outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60"
              placeholder="Ej: Supermercado, Transporte..."
              value={nombre}
              disabled={sinFondos}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            Monto a gastar ($)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-bold text-slate-400">
              $
            </span>
            <input
              type="number"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pr-4 pl-9 text-sm font-medium text-slate-800 transition-all outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60"
              placeholder="Ej: 1500"
              value={cantidad}
              disabled={sinFondos}
              min="1"
              step="any"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={sinFondos}
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>AGREGAR GASTO</span>
        </button>
      </form>
    </div>
  );
};

FormularioGastos.propTypes = {
  restante: PropTypes.number.isRequired,
  addSpending: PropTypes.func.isRequired,
};

export default FormularioGastos;
