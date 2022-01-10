import React, { useState, useEffect } from 'react';
import InputPresupuesto from './Components/InputPresupuesto';
import FormularioGastos from './Components/FormularioGastos';
import ListadoGastos from './Components/ListadoGastos';
import ExpandirPresupuesto from './Components/ExpandirPresupuesto';
import ControlRestante from './Components/ControlRestante';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  //function to child component
  const addSpending = (gasto) => {
    setGastos([...gastos, gasto]);
  }

  useEffect(() => {
    var gastosTotales = 0;
    gastos.forEach((gasto) => {
      gastosTotales += gasto.cantidad;
    })
    setRestante(presupuesto - gastosTotales);
  }, [gastos, presupuesto])

  const expandirPresupuesto = (evt) => {
    evt.preventDefault();
    setPresupuesto(presupuesto + Number(document.querySelector('.input-expandir').value));
    document.querySelector('.input-expandir').value = 0;
  }
  return (
    <>
      <div className="container">
        <header>
          <h1>Presupuesto</h1>
        </header>
        <main className='contenido contenido-principal '>
          {presupuesto ? (
            <>
              <h2 className='contenido alert-primary'>Tu presupuesto inicial es de ${presupuesto}</h2>
              <div className='row contenido'>
                <div className='one-half column'>
                  <FormularioGastos addSpending={addSpending} restante={restante} />
                </div>
                <div className='one-half column'>
                  {gastos ? <ListadoGastos gastos={gastos} /> : null}
                  <ControlRestante presupuesto={presupuesto} restante={restante} />
                  <ExpandirPresupuesto expandirPresupuesto={expandirPresupuesto} />
                </div>
              </div>
            </>)
            : <InputPresupuesto setPresupuesto={setPresupuesto} setRestante={setRestante} />}

        </main>
      </div>


    </>
  );
}

export default App;
