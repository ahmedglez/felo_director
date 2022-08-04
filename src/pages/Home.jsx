import React from "react";
import Introduction from "../containers/Introduction";
import introduction_image from "../assets/imgs/introducction.jpg";
import VideoClipsSection from "../containers/VideoClipsSection";
import RecognizedClients from "../containers/RecognizedClients";
import YoutubeBanner from "../containers/YoutubeBanner";
import Footer from "../containers/Footer";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home-container container-fluid p-0">
      <Introduction
        image={introduction_image}
        title="El arte de los detalles"
      />
      <VideoClipsSection />
      <RecognizedClients />
      <YoutubeBanner />
      <Footer />
    </div>
  );
};

export default Home;
