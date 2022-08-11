import React from "react";
import Header from "../components/Header.jsx";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "../styles/Contact.scss";

const Contact = () => {
  const linksStyle = {
    color: "$nav_links_white",
    background:
      "linear-gradient(to right,rgba(100, 200, 200, 0),rgba(100, 200, 200, 0)),linear-gradient(to right,$nav_links_white,$nav_links_white,$nav_links_white)",
  };
  return (
    <div className="contact-container container-fluid p-0 ">
      <Header className="contact-section_header pb-5" style={linksStyle} />
      <div className="info-container container-fluid p-0 pt-5 pt-sm-5 ">
        <div className="info_title mb-4 mt-4 mb-sm-1">
          <h1>CONTACTAR</h1>
        </div>
        <div className="info_content m-0 p-0">
          <ul className="pt-lg-4 pt-sm-2 mt-2  mb-3 pl-0 ">
            <li >
              <div className="li-container d-flex flex-md-row flex-lg-row  mb-4 mt-1">
                <strong className="mr-lg-2 mr-md-2">
                  {window.screen.width >= 800 ? (
                    "Envíame un WhatsApp a: "
                  ) : (
                    <BsWhatsapp />
                  )}{" "}
                </strong>
                <a href="https://wa.me/5358344910">https://wa.me/5358344910</a>
              </div>
            </li>
            <li >
              <div className="li-container d-flex flex-md-row flex-lg-row  mb-4 mt-1">
                <strong className="mr-lg-2 mr-md-2">
                  {window.screen.width >= 800 ? (
                    "Envíame un Correo a: "
                  ) : (
                    <HiOutlineMail />
                  )}{" "}
                </strong>
                <a href="mailto:jose.gonzalez.gomez@gmail.com">
                  felodirector@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-container container-fluid p-0 mt-lg-5 mt-sm-3 mb-0 pb-0">
          <div className="footer-container_socials d-flex flex-row justify-content-center ">
            <div className="footer-container_socials-item ">
              <BsYoutube
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCl8y2mIN_7pArnrAND5qkqg"
                  )
                }
              />
            </div>
            <div className="footer-container_socials-item">
              <FaInstagram
                onClick={() =>
                  window.open("https://www.instagram.com/felodirector/")
                }
              />
            </div>
          </div>
          <div className="footer-container_copyright d-flex flex-column justify-content-center pt-4">
            <h3>Felo Director</h3>
            <p>Copyright © 2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
