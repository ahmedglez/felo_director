import React from "react";
import equipoImg1 from "../assets/imgs/david.jpg";
import equipoImg2 from "../assets/imgs/gaby.jpg";
import equipoImg3 from "../assets/imgs/felo.jpg";
import "../styles/Carousel.scss";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval={6000}
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active  ">
          <div className="carousel-img">
            <img              
              src={equipoImg1}
              alt="First slide"
            />
          </div>
          <div className="carousel-caption">
            <h5>
              <strong>David</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img
              src={equipoImg2}
              alt="First slide"
            />
          </div>
          <div className="carousel-caption  ">
            <h5>
              <strong>Gaby</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img
              src={equipoImg3}
              alt="First slide"
            />
          </div>
          <div className="carousel-caption ">
            <h5>
              <strong>Felo</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
