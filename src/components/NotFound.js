import React from "react";

const NotFound = () => {
  const center = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const error = {
    fontSize: "5rem",
    fontWeight: "bold"
  };

  return (
    <div style={center}>
      <span style={error}>404</span>
      <h1>Страница не найдена</h1>
    </div>
  );
};

export default NotFound;
