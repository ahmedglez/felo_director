import React from "react";
import "../styles/VideoclipItem.scss";

const VideoclipItem = ({ videoclip }) => {
  const { title, artist, url, image, date } = videoclip;

  const handleClick = () => {
    window.open(url);
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
          <p>{artist}</p>
        </div>
        <div className="videoclip-item_date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoclipItem;
