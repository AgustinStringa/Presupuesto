import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg, br = [] }) => {
  return (
    <div
      role="alert"
      className="alert alert-danger error flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50/90 p-4 text-left text-sm text-rose-800 shadow-2xs"
    >
      <div className="mt-0.5 shrink-0 text-rose-600">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-semibold">{msg}</p>
        {br && br.length > 0 && (
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-rose-700">
            {br.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Error.propTypes = {
  br: PropTypes.array,
  msg: PropTypes.string.isRequired,
};

export default Error;
