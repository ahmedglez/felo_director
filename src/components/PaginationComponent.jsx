import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/PaginationComponent.scss";

const PaginationComponent = () => {
  const { state, setCurrentPage } = useContext(AppContext);
  const { length, limit } = state;

  const handleAdd = () => {
    setCurrentPage(state.currentPage + 1);
    window.scroll(0, 0);
  };
  const handleRest = () => {
    setCurrentPage(state.currentPage - 1);
    window.scroll(0, 0);
  };

  const handleToggle = (index) => {
    setCurrentPage(index);
    window.scroll(0, 0);
  };

  useEffect(() => {
    const div = document.getElementById("indexContainer");
    const childs = div.childNodes;
    for (let i = 0; i < childs.length; i++) {
      if (i === state.currentPage) {
        childs[i].classList.add("currentIndex");
      } else {
        if (childs[i].classList.contains("currentIndex")) {
          childs[i].classList.remove("currentIndex");
        }
      }
    }
  }, [state.currentPage]);

  const getIndexex = () => {
    let array = [];
    const fragments = state.fragmetList.length;
    for (let i = 0; i < fragments; i++) {
      array.push(
        <p id={`index${i}`} key={i} onClick={() => handleToggle(i)}>
          {i + 1}
        </p>
      );
    }
    return array;
  };
  return (
    <div className="pagination-component_container container-fluid">
      <div className="pagination-component col-lg-4 col-md-4 col-sm-5">
        <div className="pagination-component_button">
          <button
            disabled={state.currentPage === 0 ? true : false}
            onClick={handleRest}
          >
            {" "}
            <IoIosArrowBack className="pagination-component_icon" />
          </button>
        </div>

        <div className="pagination-component_indexes" id="indexContainer">
          {getIndexex()}
        </div>

        <div className="pagination-component_button">
          <button
            onClick={handleAdd}
            disabled={
              state.currentPage === parseInt(length / limit) ? true : false
            }
          >
            {" "}
            <IoIosArrowForward className="pagination-component_icon" />
          </button>
        </div>
      </div>
    </div>
  );

  /* */
};

export default PaginationComponent;
