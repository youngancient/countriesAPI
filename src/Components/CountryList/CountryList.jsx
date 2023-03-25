import { useEffect, useState } from "react";
import axios from "axios";
import Country from "../Country/Country";
import "./style.css";
import Error from "../Error404/Error";
import Loader from "../Loader/Loader";
import { AnimatePresence } from "framer-motion";
import BasicError from "../Error404/BasicError";

const CountryList = ({
  search,
  countries,
  setCountries,
  setDuplicate,
  duplicate,
  filter,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (search.isSearch) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search.q}`)
        .then((res) => {
          if (filter.isFilter) {
            let whole = res.data;
            const filteredWhole = whole.filter((country) => {
              return country.region === filter.q;
            });
            setCountries(filteredWhole);
          } else {
            setCountries(res.data);
          }
          setLoading(true);
          setError();
        })
        .catch((err) => {
          setLoading(false);
          setError("ish");
        });
    } else {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          if (filter.isFilter) {
            let whole = res.data;
            const filteredWhole = whole.filter((country) => {
              return country.region === filter.q;
            });
            setCountries(filteredWhole);
          } else {
            setCountries(res.data);
          }
          setLoading(true);
        })
        .catch((err) => {
          setLoading(false);
          setError("ish");
        });
    }
  }, [search.q]);

  // initialize the read-only state
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setDuplicate(res.data);
        setLoading(true);
      })
      .catch((err) => {
        setLoading(false);
        setError("ish");
      });
  }, []);

  return (
    <div className="country-list">
      {loading &&
        countries.map((country) => (
          <Country
            capital={country.capital}
            name={country.name.common}
            population={country.population}
            region={country.region}
            flag={country.flags.png}
            key={country.name.common}
            country={country}
            duplicate={duplicate}
          />
        ))}
      <div className="x-load">
        <AnimatePresence>{!loading && <Loader key="loader" />}</AnimatePresence>
      </div>
      {/* {error && <Error />} */}
      {error && <BasicError />}
    </div>
  );
};

export default CountryList;
