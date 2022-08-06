import "../styles/Header.scss";
import "../animations/burguerMenu.scss";
import { Link } from "react-router-dom";

const Header = () => {
  /* block overflow-y on body doing click */

  const handleClick = () => {
    const NavMenu = document.getElementById("navMenu");
    const Nav = document.getElementsByTagName("nav")[0];
    Nav.classList.toggle("fixed-top");
    NavMenu.classList.toggle("active");
  };
  return (
    <nav className="navbar navbar-expand-lg container-fluid pl-lg-5 pr-lg-5 pl-md-5 pr-md-5  ">
      <Link className="navbar-brand" to="/">
        FELO DIRECTOR
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="true"
        aria-label="Toggle navigation"
        id="navMenu"
        onClick={() => {
          handleClick();
        }}
        
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-sm-center justify-content-lg-end "
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ">
          <Link className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/videoclips">
            VideoClips
          </Link>
          <Link className="nav-item nav-link" to="/equipo">
            Equipo
          </Link>
          <Link className="nav-item nav-link" to="/contactar">
            Contactar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
