import React from "react";
import "../styles/YoutubeBanner.scss";

const YoutubeBanner = () => { 

  return (
    <div className="youtube_banner-container container-fluid pb-2 d-flex flex-lg-row flex-md-row flex-sm-column justify-content-lg-between ">
      <div className="youtube_banner-text container-fluid col-lg-8 col-md-8 col-sm-12">
        <h2 className="youtube_banner-title">
          Subscribete en mi canal de Youtube
        </h2>
      </div>
      <div className="youtube_banner-button col-lg-4 col-md-4 col-sm-12">
        <a
          href="https://www.youtube.com/channel/UCl8y2mIN_7pArnrAND5qkqg"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube_banner-button-link"
        >
          <button className="youtube_banner-button_button">Suscribete</button>
        </a>
      </div>
    </div>
  );
};

export default YoutubeBanner;
