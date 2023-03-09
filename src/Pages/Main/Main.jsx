import { useContext, useState } from "react";
import CountryList from "../../Components/CountryList/CountryList";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";
import Filter from "./Filter";

const Main = () => {
  const themes = useContext(ThemeContext);
  const [search, setSearch] = useState({
    q: "",
    isSearch: false,
  });
  const [filter, setFilter] = useState({
    q: "",
    isSearch: false,
  });

  const [countries, setCountries] = useState([]);

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
      <div className="functions ele">
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
            countries={countries}
            setCountries={setCountries}
          />
        </div>
      </div>
      <div className="countries ele">
        <CountryList
          search={search}
          countries={countries}
          setCountries={setCountries}
        />
      </div>
    </div>
  );
};

export default Main;
