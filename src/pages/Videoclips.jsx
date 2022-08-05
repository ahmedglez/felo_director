import React, { useContext, useState } from "react";
import VideoclipList from "../components/VideoclipList";
import AppContext from "../context/AppContext";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import "../styles/VideoclipsPage.scss";

const Videoclips = () => {
  const { state } = useContext(AppContext);
  console.log(state.filterList);

  const linksStyle = {
    color: "$nav_links_white",
    background:
      "linear-gradient(to right,rgba(100, 200, 200, 0),rgba(100, 200, 200, 0)),linear-gradient(to right,$nav_links_white,$nav_links_white,$nav_links_white)",
  };

  return (
    <div className="videoclips-section_container container-fluid p-0">
      <Header className="videoclips-section_header " style={linksStyle} />
      <Searcher />
      {state.filterList.length > 0 ? (
        <VideoclipList videoclips={state.filterList} />
      ) : (
        <div className="videoclips-section_no-results">
          <h1>No results</h1>
        </div>
      )}
    </div>
  );
};

export default Videoclips;
