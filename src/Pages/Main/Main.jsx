import { useContext, useState } from "react";
import CountryList from "../../Components/CountryList/CountryList";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";
import Filter from "./Filter";
import { motion } from "framer-motion";

const pageVariants = {
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
  funcExit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Main = () => {
  const themes = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    q: "",
    isFilter: false,
  });
  
  // readable and writable state
  const [countries, setCountries] = useState([]);

  // readable state
  const [duplicate, setDuplicate] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // handling input
  const handleSearch = (event) => {
    let query = event.target.value.trim();
    if (query == "") {
      setSearch({
        q: query,
        isSearch: false,
      });
    } else {
      setSearch({
        q: query,
        isSearch: true,
      });
    }
  };
  return (
    <div className={`${themes.layoutBG} main `}>
      <motion.div className="functions ele"
      variants={pageVariants}
      exit = "funcExit"
      >
        <div className={`search ${themes.shadow}`}>
          <i
            className={`fa-solid fa-magnifying-glass search-icon ${themes.primaryText}`}
          ></i>
          <input
            type="text"
            name="q"
            id=""
            placeholder="Search for a country ..."
            className={`${themes.componentBG} ${themes.primaryText}`}
            onChange={handleSearch}
            onKeyUp={handleSearch}
          />
        </div>
        <div className="filter-cont">
          <Filter
            filter={filter}
            setFilter={setFilter}
            setCountries={setCountries}
            duplicate={duplicate}
            setLoading={setLoading}
            setError={setError}
            error={error}
            search={search}
          />
        </div>
      </motion.div>
      <motion.div className="countries ele" variants={pageVariants} exit="exit">
        <CountryList
          search={search}
          countries={countries}
          setCountries={setCountries}
          duplicate={duplicate}
          setDuplicate={setDuplicate}
          setLoading={setLoading}
          loading={loading}
          filter={filter}
        />
      </motion.div>
    </div>
  );
};

export default Main;
