import React, {useEffect, useContext, useState} from "react";
import AppContext from "../context/AppContext";
import VideoclipItem from "./VideoclipItem";

const VideoclipListDinamic = ({ currentPage }) => {
  const { state } = useContext(AppContext);
  const  [videoclips, setVideoclips]  = useState(state.fragmetList[currentPage]);
  
  return (
    <div className="videoclips-list container-fluid row justify-content-center m-0 p-0 ">
      {videoclips.map((videoclip, index) => (
        <VideoclipItem key={index} videoclip={videoclip} />
      ))}
    </div>
  );
};

export default VideoclipListDinamic;
