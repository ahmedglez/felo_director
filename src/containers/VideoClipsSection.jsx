import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import AppContext from "../context/AppContext";
import VideoclipList from "../components/VideoclipList";
import "../styles/VideoClips_Home_section.scss";

const VideoClipsSection = () => {
  const { getRecentVideoclips } = useContext(AppContext);
  const videoclips = getRecentVideoclips();
  const navigate = useNavigate();
  return (
    <div className="videoclips-section container-fluid m-0 p-0 pt-5 justify-content-center ">
      <div className="videoclips-section_header col-lg-5 col-md-5 col-sm-7 m-0 d-flex  flex-sm-colum mb-4  ">
        <p className="p-0 ">Mis más recientes Video Clips</p>
        <BiDownArrowAlt className="videoclips-section_header_icon " />
      </div>
      <VideoclipList videoclips={videoclips} />
      <div className="videoclips-section_seeMore ">
        <button onClick={() => navigate("/videoclips")}>
          <p>VER MAS</p>
        </button>
      </div>
    </div>
  );
};

export default VideoClipsSection;
