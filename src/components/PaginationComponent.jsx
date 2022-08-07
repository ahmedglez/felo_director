import React, { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/PaginationComponent.scss";

const PaginationComponent = ({ localState, setLocalState }) => {
  const handleAdd = () => {
    setLocalState({
      ...localState,
      currentPage: localState.currentPage + 1,
    });

    console.log(localState.currentPage);
  };
  const handleRest = () => {
    setLocalState({
      ...localState,
      currentPage: localState.currentPage - 1,
    });
  };

  const handleToggle = (index) => {
    setLocalState({
      ...localState,
      currentPage: index,
    });
    
  };

  useEffect(() => {
    const div = document.getElementById("indexContainer");
    const childs = div.childNodes;
    for (let i = 0; i < childs.length; i++) {
      if (i === localState.currentPage) {
        childs[i].classList.add("currentIndex");
      } else {
        if (childs[i].classList.contains("currentIndex")) {
          childs[i].classList.remove("currentIndex");
        }
      }
    }
  }, [localState.currentPage]);

  const getIndexex = () => {
    let array = [];
    const fragments = parseInt(localState.length / localState.limit);
    for (let i = 0; i < fragments + 1; i++) {
      array.push(<p id={`index${i}`} onClick={()=> handleToggle(i) }>{i + 1}</p>);
    }
    return array;
  };
  return (
    <div className="pagination-component_container container-fluid">
      <div className="pagination-component col-lg-4 col-md-4 col-sm-5">
        <div className="pagination-component_button">
          <button
            disabled={localState.currentPage === 0 ? true : false}
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
              localState.currentPage ===
              parseInt(localState.length / localState.limit)
                ? "true"
                : false
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
