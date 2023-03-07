import "./style.css";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import { useLocation } from "react-router-dom";

const CountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const location = useLocation();
//   const { country } = useParams();
  useEffect(() => {
    setCountryDetail(location.state);
    console.log(location.state);
  }, []);
  const themes = useContext(ThemeContext);
  return (
    <>
      {countryDetail !== null ? (
        <div className={`${themes.layoutBG} ${themes.primaryText} ele display`}>
          <div className="back-btn">
            <NavLink to="/" className="back">
              <button
                className={`${themes.componentBG} ${themes.shadow} ${themes.primaryText}`}
              >
                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                <p>Back</p>
              </button>
            </NavLink>
          </div>
          <div className="inner-cont">
            <div className="flag">
              <img
                src={countryDetail.flags.png}
                alt=""
                className=""
                loading="lazy"
              />
            </div>
            <div className="inner-detail">
              <div className="all-inner">
                <h2 className="">{countryDetail.name.common}</h2>
                <div className="one">
                  <span>
                    <p className="head">Native Name:</p>
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.translations.nld.common}
                    </p>
                  </span>
                  <span>
                    <p className="head">Top Level Domain:</p>
                    <p className={`value ${themes.minorText}`}>{countryDetail.tld}</p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Population:</p>
                    <p className={`value ${themes.minorText}`}>{countryDetail.population}</p>
                  </span>
                  <span>
                    <p className="head">Currencies:</p>
                    <p className={`value ${themes.minorText}`}>
                      {Object.keys(countryDetail.currencies)}
                    </p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Region:</p>
                    <p className={`value ${themes.minorText}`}>{countryDetail.region}</p>
                  </span>
                  <span>
                    <p className="head">Languages:</p>
                    <p className={`value ${themes.minorText}`}>
                      {Object.values(countryDetail.languages).toString()}
                    </p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Sub Region:</p>
                    <p className={`value ${themes.minorText}`}>{countryDetail.subregion}</p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Capital:</p>
                    <p className={`value ${themes.minorText}`}>{countryDetail.capital}</p>
                  </span>
                </div>
                <div className="borders">
                  <p className="head">Border Countries: </p>
                  <div className="bdrs">{countryDetail.borders === undefined  ? "None found" : countryDetail.borders.toString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>{/* No such country!!! */}</>
      )}
    </>
  );
};

export default CountryDetail;
