import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import equipoImg1 from "../assets/imgs/david.jpg";
import equipoImg2 from "../assets/imgs/gaby.jpg";
import equipoImg3 from "../assets/imgs/felo.jpg";
import "../styles/Carousel.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={10000}
      bullets={false}
      className="carousel-container"      
    >
      <div className="carousel-wrapper" data-src={equipoImg1} >        
        <div className="carousel-container_text">
          <h1>David </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quisquam.
          </p>
        </div>
      </div>
      <div className="carousel-wrapper" data-src={equipoImg2}>
        <div className="carousel-container_text">
          <h1>Gaby</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quisquam.
          </p>
        </div>
      </div>
      <div className="carousel-wrapper" data-src={equipoImg3}>
        <div className="carousel-container_text">
          <h1>Felo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quisquam.
          </p>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Carousel;
