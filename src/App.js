import React, { useState } from 'react';
import InputPresupuesto from './Components/InputPresupuesto';
import FormularioGastos from './Components/FormularioGastos';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  return (
    <>
      <div className="container">
        <header>
          <h1>Presupuesto</h1>
        </header>
        <main className='contenido contenido-principal '>
          {presupuesto ? (
            <>
              <h2 className='contenido alert alert-primary'>Tu presupuesto inicial es de ${presupuesto}</h2>
              <div className='row'>
                <div className='one-half column'>
                  <FormularioGastos />
                </div>
                <div className='one-half column'>

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
