import React from "react";

const ListadoGastos = ({ gastos }) => {
  return (
    <ul className="gastos-realizados">
      <h2>Tus Gastos</h2>
      {gastos.map((gasto) => (
        <li className="gastos" key={gasto.id}>
          <p>
            {gasto.nombre}{" "}
            <span className="fecha-gasto">
              {gasto.fecha.getDate() +
                "/" +
                (gasto.fecha.getMonth() + 1) +
                "/" +
                gasto.fecha.getFullYear()}{" "}
              {gasto.fecha.getHours() + ":" + gasto.fecha.getMinutes()}
            </span>
            <span className="gasto">${gasto.cantidad}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ListadoGastos;
