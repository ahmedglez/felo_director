import { useContext } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import VideoclipItem from "../components/VideoclipItem";
import AppContext from "../context/AppContext";
import "../styles/VideoClips_Home_section.scss";

const VideoClips_Section = () => {
  const { state } = useContext(AppContext);
  const { videoclips } = state;
  return (
    <div className="videoclips-section container-fluid m-0 p-0 pt-5 justify-content-center ">
      <div className="videoclips-section_header col-lg-5 col-md-5 col-sm-7 m-0 d-flex  flex-sm-colum mb-5  ">
        <p className="p-0">Mis más recientes Video Clips</p>
        <BiDownArrowAlt className="videoclips-section_header_icon" />
      </div>
      <div className="videoclips-list container-fluid row justify-content-center m-0 p-0 ">
        {videoclips.map((videoclip) => (
          <VideoclipItem key={videoclip.id} videoclip={videoclip} />
        ))}
      </div>
    </div>
  );
};

export default VideoClips_Section;
