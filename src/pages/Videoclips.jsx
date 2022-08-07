import React, { useContext, useState } from "react";
import VideoclipList from "../components/VideoclipList";
import AppContext from "../context/AppContext";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import NoResults from "../components/NoResults";
import PaginationComponent from "../components/PaginationComponent";
import Footer from "../containers/Footer";
import "../styles/VideoclipsPage.scss";

const Videoclips = () => {
  const { state } = useContext(AppContext);
  const [localState, setLocalState] = useState({
    limit: 9,
    length: state.filterList.length,
    currentPage: 0,
  });

  const divideArrays = () => {
    let array = [];
    const multiples = parseInt(localState.length / localState.limit);
    for (let i = 0; i < multiples + 1; i++) {
      array.push(
        state.videoclips.slice(i * localState.limit, localState.limit * (i + 1))
      );
    }    
    return array;
  };

  const [arrays, setArrays] = useState(divideArrays());


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
        <VideoclipList videoclips={arrays[localState.currentPage]} />
      ) : (
        <NoResults search={state.filter} />
      )}
      <PaginationComponent
        localState={localState}
        setLocalState={setLocalState}
      />
      <Footer />
    </div>
  );
};

export default Videoclips;
