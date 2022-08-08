import { stat } from "fs";
import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AppContext from "../context/AppContext";
import "../styles/Searcher.scss";

const Searcher = () => {
  const { setFilter, state } = useContext(AppContext)
  const handleChange = (e) => {
    setFilter(e.target.value);
    console.log(state.filter);
    console.log(state.filterList);
  }
 

  

  return (
    <div className="searcher-container container-fluid input-group mb-5 mt-4 ">
      <div className="input-comtainer col-lg-7 col-md-7 col-sm-8 p-0">
        <input
          className=" form-control"
          type="text"
          placeholder="Título o Artista"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        ></input>
        <div className="input-container_icon-container ">
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

export default Searcher;
