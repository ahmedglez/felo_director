import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AppContext from "../context/AppContext";
import "../styles/Searcher.scss";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const { setFilter } = useContext(AppContext)
  const handleChange = (e) => {
    setSearch(e.target.value);
    setFilter(search);
    console.log(search);
  }
  

  return (
    <div className="input-container container input-group mb-3 mt-4">
      <input
        className="col-lg-7 col-md-5 col-sm-3 form-control"
        type="text"
        placeholder="Video Musical o Artista"
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      <div className="input-group-append">
        <span className="input-group-text" id="search-btn">
          <BsSearch />
        </span>
      </div>
    </div>
  );
};

export default Searcher;
