import React from "react";
import "../styles/NoResults.scss";

const NoResults = ({ search }) => {
  return (
    <div className="no-results-container container-fluid">
      <div className="no-results-container_icon-container"></div>
      <div className="no-results-container_text">
        <h2>No se han encontrado coincidencias para "{search}" </h2>
      </div>
    </div>
  );
};

export default NoResults;
