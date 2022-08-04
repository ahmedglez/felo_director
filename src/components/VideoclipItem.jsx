import React from "react";
import "../styles/VideoclipItem.scss";
import { getMiniature } from "../utils/youtube_utilitys";

const VideoclipItem = ({ videoclip }) => {
  const { title, artists, link, date } = videoclip;
  const image = getMiniature(link);
  var date2 = new Date(date).toLocaleDateString();

  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className="card  p-0" onClick={handleClick}>
      <img src={image} alt="miniatura del video" />
      <div className="info">
        <div className="videoclip-item_title">
          <h1>{title}</h1>
        </div>
        <div className="separator"></div>
        <div className="videoclip-item_artist">
          <p>{artists}</p>
        </div>
        <div className="videoclip-item_date">
          <p>{date2}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoclipItem;
