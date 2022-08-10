import React from "react";
import "../styles/Equipo.scss";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const Equipo = () => {
  return (
    <div className="equipo-container container-fluid ">
      <Header />
      <div className="equipo-container_text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptates a assumenda corrupti dicta quas expedita quo, sequi
          laboriosam enim similique. Commodi tempore aliquam consectetur dicta
          ipsa similique necessitatibus dolores.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero voluptates a assumenda corrupti
          dicta quas expedita quo, sequi laboriosam enim similique. Commodi
          tempore aliquam consectetur dicta ipsa similique necessitatibus
          dolores.
        </p>
      </div>
      <Carousel  />
    </div>
  );
};

export default Equipo;
