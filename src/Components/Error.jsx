import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg, br }) => {
  return (
    <>
      <p className="alert alert-danger error">
        {msg}
        {br.map((message) => (
          <span style={{ display: "block" }} key={message}>
            &bull; {message}
          </span>
        ))}
      </p>
    </>
  );
};
/***
 * br es un array de mensajes que se muestran en la alerta. La característica es que cada elemento del array se escribe en un nuevo renglón
 * msg es el mensaje principal de la alerta
 */
Error.propTypes = {
  br: PropTypes.array,
  msg: PropTypes.string.isRequired,
};

export default Error;
