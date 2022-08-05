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
    <div className="input-container container-fluid input-group mb-3 mt-4">
      <input
        className="col-lg-7 col-md-7 col-sm-7 form-control"
        type="text"
        placeholder="Título o Artista"
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
      <div className="input-container_icon-container mb-0 mt-0 pb-0 pt-0">
        <span className="input-group-text" id="search-btn">
          <BsSearch />
        </span>
      </div>
    </div>
  );
};

export default Searcher;
