import React from "react";
import "../styles/Equipo.scss";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../containers/Footer";

const Equipo = () => {
  const linksStyle = {
    color: "$nav_links_white",
    background:
      "linear-gradient(to right,rgba(100, 200, 200, 0),rgba(100, 200, 200, 0)),linear-gradient(to right,$nav_links_white,$nav_links_white,$nav_links_white)",
  };
  return (
    <div className="equipo-container container-fluid ">
      <Header className="team-section_header" style={linksStyle} />
      <div className="equipo-container_text">
        <h1>Nuestro Equipo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptates a assumenda corrupti dicta quas expedita quo, sequi
          laboriosam enim similique. Commodi tempore aliquam consectetur dicta
          ipsa similique necessitatibus dolores.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero voluptates a assumenda corrupti.
        </p>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default Equipo;
