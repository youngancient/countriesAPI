import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const Country = ({ capital, name, population, region, flag}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${name}`);
  };

  const themes = useContext(ThemeContext);
  return (
    <div className={`country ${themes.shadow}`} onClick={handleClick}>
      <div className="country-img">
        <img src={flag} alt={name} className="" loading="lazy" />
      </div>
      <div className={`under ${themes.componentBG} ${themes.primaryText}`}>
        <h3>{name}</h3>
        <div className="minor">
          <span>
            <p className="head">Population:</p>
            <p className={`value ${themes.minorText}`}>{population}</p>
          </span>
          <span>
            <p className="head">Region:</p>
            <p className={`value ${themes.minorText}`}>{region}</p>
          </span>
          <span>
            <p className="head">Capital:</p>
            <p className={`value ${themes.minorText}`}>{capital === undefined ? "None found" : capital.toString()}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Country;
