import React, { useState, useEffect } from 'react';
import InputPresupuesto from './Components/InputPresupuesto';
import FormularioGastos from './Components/FormularioGastos';
import ListadoGastos from './Components/ListadoGastos';
import ExpandirPresupuesto from './Components/ExpandirPresupuesto';
import ControlRestante from './Components/ControlRestante';
import { Header, Footer } from '../shared';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [guardadoFeedback, setGuardadoFeedback] = useState(false);

  // function to child component
  const addSpending = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  useEffect(() => {
    if (localStorage.getItem('presupuesto')) {
      const { presupuesto, restante, gastos } = JSON.parse(
        localStorage.getItem('presupuesto')
      );
      setPresupuesto(presupuesto);
      setRestante(restante);
      setGastos(gastos);
    }
  }, []);

  useEffect(() => {
    let gastosTotales = 0;
    gastos.forEach((gasto) => {
      gastosTotales += gasto.cantidad;
    });
    setRestante(presupuesto - gastosTotales);
  }, [gastos, presupuesto]);

  const expandirPresupuesto = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('.input-expandir');
    const valor = Number(input?.value || 0);
    if (valor > 0) {
      setPresupuesto(presupuesto + valor);
      if (input) input.value = '';
    }
  };

  const guardarDatos = () => {
    localStorage.setItem(
      'presupuesto',
      JSON.stringify({
        presupuesto: presupuesto,
        restante: restante,
        gastos: gastos,
      })
    );
    setGuardadoFeedback(true);
    setTimeout(() => setGuardadoFeedback(false), 2000);
  };

  const eliminarDatos = () => {
    localStorage.removeItem('presupuesto');
    setPresupuesto(0);
    setRestante(0);
    setGastos([]);
  };

  const gastosTotales = gastos.reduce((acc, curr) => acc + curr.cantidad, 0);

  return (
    <div className="flex min-h-dvh flex-col bg-slate-50/60">
      <Header title="Presupuesto Semanal" theme="presupuesto" />
      <div className="min-h-full w-full flex-1 px-4 py-8">
        <main className="mx-auto w-full max-w-5xl">
          {presupuesto ? (
            <div className="space-y-6">
              {/* Stat Cards Overview */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">Presupuesto Base</p>
                      <p className="text-xl font-extrabold text-slate-800">${presupuesto.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">Gastos Acumulados</p>
                      <p className="text-xl font-extrabold text-slate-800">${gastosTotales.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${restante > 0 ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">Restante</p>
                      <p className={`text-xl font-extrabold ${restante > 0 ? "text-emerald-700" : "text-rose-700"}`}>
                        ${restante.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Workspace Layout */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
                {/* Columna Izquierda: Formulario & Acciones Rápidas */}
                <div className="space-y-6 lg:col-span-6">
                  <FormularioGastos addSpending={addSpending} restante={restante} />

                  <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                    <button
                      type="button"
                      onClick={guardarDatos}
                      className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-slate-700 active:scale-98"
                    >
                      {guardadoFeedback ? (
                        <>
                          <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>¡Guardado con éxito!</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                          </svg>
                          <span>Guardar datos</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={eliminarDatos}
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-rose-600 transition-all hover:border-rose-200 hover:bg-rose-50 active:scale-98"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Reiniciar</span>
                    </button>
                  </div>
                </div>

                {/* Columna Derecha: Listado de Gastos, Control y Expansión */}
                <div className="space-y-6 lg:col-span-6">
                  <ControlRestante presupuesto={presupuesto} restante={restante} />
                  <ListadoGastos gastos={gastos} />
                  <ExpandirPresupuesto expandirPresupuesto={expandirPresupuesto} />
                </div>
              </div>
            </div>
          ) : (
            <InputPresupuesto
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />
          )}
        </main>
      </div>
      <Footer
        title="Administración de Presupuesto"
        description="Lleva el control de tu presupuesto semanal y gastos en tiempo real."
        theme="presupuesto"
      />
    </div>
  );
}

export default App;
