import { useContext } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const Main = () => {
  const themes = useContext(ThemeContext);
  return (
    <div className={`${themes.layoutBG} main`}>
      <div className="functions ele">
        <div className="search">
          <i class={`fa-solid fa-magnifying-glass search-icon ${themes.primaryText}`}></i>
          <input
            type="text"
            name="q"
            id=""
            placeholder="Search for a country ..."
            className={`${themes.componentBG} ${themes.primaryText}`}
          />
        </div>
        <div className="filter">
          <p>filter by region</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
