import React, {useContext, useState} from "react";
import VideoclipList from "../components/VideoclipList";
import AppContext from '../context/AppContext'
import Searcher from '../components/Searcher'
import Header from "../components/Header";
import "../styles/VideoclipsPage.scss";

const Videoclips = () => {

  const { state} = useContext(AppContext)
  
  

  return (
    <div className="videoclips-section_container container-fluid p-0">
      <Header  className='videoclips-section_header ' />
      <Searcher />
      <VideoclipList videoclips={state.filterList} />
    </div>
  );
};

export default Videoclips;
