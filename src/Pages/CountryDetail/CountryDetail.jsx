import "./style.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import { useLocation } from "react-router-dom";
import Border from "./Border";
import { v4 as uuid } from "uuid";
import Error from "../../Components/Error404/Error";

const CountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const [countries, setCountries] = useState();
  const [borderCountries, setBorderCountries] = useState();
  const [all, setAll] = useState(false);

  let params = useParams();
  // console.log(params);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // this gets all the countries
  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${params.country}?fullText=true`
      )
      .then((res) => {
        setLoading(true);
        setCountryDetail(res.data["0"]);
        setAll(true);
      })
      .catch((err) => {
        setLoading(false);
        setError("ish");
      });
  }, [params]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setLoading(true);
        setCountries(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("ish");
      });
  }, []);

  // this filters the array of all the countries to match the boundary of the current country
  useEffect(() => {
    if (all) {
      const borders = countryDetail.borders;
      let alternativeArr = [];
      if (borders !== undefined && countries !== undefined) {
        borders.forEach((border) => {
          const newCountry = countries.filter((country) => {
            return country["cca3"] === border;
          });
          alternativeArr.push(newCountry["0"]);
        });
        setBorderCountries(alternativeArr);
        setAll(false);
      }
    }
  }, [all, params]);

  const themes = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <>
      {countryDetail && (
        <div className={`${themes.layoutBG} ${themes.primaryText} ele display`}>
          <div className="back-btn">
            <div className="back" onClick={handleBack}>
              <button
                className={`${themes.componentBG} ${themes.shadow} ${themes.primaryText}`}
              >
                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                <p>Back</p>
              </button>
            </div>
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
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.tld}
                    </p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Population:</p>
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.population}
                    </p>
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
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.region}
                    </p>
                  </span>
                  <span className="">
                    <p className="head">Languages:</p>
                    <p className={`value ${themes.minorText}`}>
                      {Object.values(countryDetail.languages).toString()}
                    </p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Sub Region:</p>
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.subregion}
                    </p>
                  </span>
                </div>
                <div className="one">
                  <span>
                    <p className="head">Capital:</p>
                    <p className={`value ${themes.minorText}`}>
                      {countryDetail.capital.toString()}
                    </p>
                  </span>
                </div>
                <div className="borders">
                  <p className="head">Border Countries: </p>
                  <div className="bdrs">
                    {borderCountries === undefined ? (
                      <p className={`none ${themes.minorText}`}>None found</p>
                    ) : (
                      borderCountries.map((border) => (
                        <Border border={border} key={uuid()} />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    {error && <Error  />}
    </>
  );
};

export default CountryDetail;
