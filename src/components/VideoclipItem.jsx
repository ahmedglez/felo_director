import React from "react";
import "../styles/VideoclipItem.scss";

const VideoclipItem = ({ videoclip }) => {
  const { title, artist, url, image, date } = videoclip;

  const handleClick = () => {
    window.open(url);
  };

  return (
    <div className="card col-sm-12 col-lg-5 col-md-5">
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
        <div className="videoclip-item_button" onClick={handleClick}>
          <p>Ver video</p>
        </div>
      </div>
    </div>
  );
};

export default VideoclipItem;
