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

Error.propTypes = {
  br: PropTypes.array,
  msg: PropTypes.string.isRequired,
};

export default Error;
