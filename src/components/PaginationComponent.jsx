import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/PaginationComponent.scss";

const PaginationComponent = ({ localState, setLocalState }) => {
  const handleAdd = () => {
    if (localState.offset + localState.limit >= localState.length) {
      setLocalState({
        ...localState,
        index: localState.offset,
        offset: localState.length,
      });
      console.log("entró");
    } else {
      setLocalState({
        ...localState,
        index: localState.offset,
        offset: localState.offset + localState.limit,
      });
    }
    console.log(localState.index, localState.offset, localState.length);
  };
  const handleRest = () => {
    if (localState.index === 0) {
      setLocalState({
        ...localState,
      });
    } else {
      setLocalState({
        ...localState,
        index: localState.index - localState.limit,
        offset: localState.index,
      });
    }
    console.log(localState.index, localState.offset);
  };

  const getIndexex = () => {
    let array = [];
    const fragments = parseInt(localState.length / localState.limit)
    for (let i = 0; i < fragments; i++){
      array.push(
        <div>
          <p>{i + 1}</p>
        </div>
      );
    }
    return array
  }
  return (
    <div className="pagination-component_container container-fluid">
      <div className="pagination-component_button">
        <IoIosArrowBack
          className="pagination-component_icon"
          disabled={localState.index === 0 ? true : false}
          onClick={handleRest}
        />
      </div>
      <div className="pagination-component_indexes">
        {
          getIndexex()
        }
      
        
        

        <p>...{parseInt(localState.length / localState.limit) + 1}</p>
      </div>
      <div className="pagination-component_button">
        <IoIosArrowForward
          className="pagination-component_icon"
          disabled={localState.offset === localState.length ? true : false}
          onClick={handleAdd}
        />
      </div>
    </div>
  );

  /* */
};

export default PaginationComponent;
