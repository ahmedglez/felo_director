import React from "react";
import VideoclipItem from "./VideoclipItem";


const VideoclipList = ({ videoclips }) => {
  return (
    <div className="videoclips-list container-fluid row justify-content-center m-0 p-0 ">
      {videoclips.map((videoclip, key) => (
        <VideoclipItem key={videoclip.id} videoclip={videoclip} />
      ))}
    </div>
  );
};

export default VideoclipList;
