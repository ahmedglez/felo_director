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
  const [currentPage, setCurrentPage] = useState(0);
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
        <VideoclipList videoclips={state.fragmetList[state.currentPage]} />
      ) : (
        <NoResults search={state.filter} />
      )}
      {state.fragmetList.length > 1 ? (
        <PaginationComponent
          currentPage={currentPage}
          length={state.fragmetList.length}
          limit={state.limit}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default Videoclips;
