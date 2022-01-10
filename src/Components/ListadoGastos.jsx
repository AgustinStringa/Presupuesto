import React from "react";
import PropTypes from "prop-types";

const ListadoGastos = ({ gastos }) => {
  return (
    <ul className="gastos-realizados">
      <h2>Tus Gastos</h2>
      {gastos.map((gasto) => (
        <li className="gastos" key={gasto.id}>
          <p>
            {gasto.nombre}{" "}
            <span className="fecha-gasto">
              {new Date(gasto.fecha).getDate() +
                "/" +
                (new Date(gasto.fecha).getMonth() + 1) +
                "/" +
                new Date(gasto.fecha).getFullYear()}{" "}
              {new Date(gasto.fecha).getHours() +
                ":" +
                new Date(gasto.fecha).getMinutes()}
            </span>
            <span className="gasto">${gasto.cantidad}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
/**
 * gastos: es el array que contiene los gastos. Es uno de los states principales de la app.
 */
ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
};
export default ListadoGastos;
