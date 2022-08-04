import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container container-fluid">
      <div className="footer-container_socials d-flex flex-row justify-content-center ">
        <div className="footer-container_socials-item ">
          <FaWhatsapp onClick={() => window.open("https://wa.me/5358344910")} />
        </div>
        <div className="footer-container_socials-item">
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/felodirector/")
            }
          />
        </div>
        <div className="footer-container_socials-item">
          <MdOutlineMailOutline
            onClick={() =>
              window.open("mailto:felo.director@gmail.com?Subject=Colaboración")
            }
          />
        </div>
      </div>
      <div className="footer-container_copyright d-flex flex-column justify-content-center">
        <h3>Felo Director</h3>
        <p>Copyright © 2022. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
