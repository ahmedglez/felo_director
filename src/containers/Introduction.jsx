import React from "react";
import Header from "../components/Header";
import "../styles/Introduction.scss";

const Introduction = ({ image, title }) => {
  return (
    <div className="introduction-container container-fluid p-0  " id="introID">
      <Header />
      <div className="text-container  p-0 ">
        <div className="title  ">
          <p className="">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
