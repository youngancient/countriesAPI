import { useEffect, useState } from "react";
import axios from "axios";
import Country from "../Country/Country";
import "./style.css";

const CountryList = ({ search }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (search.isSearch) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search.q}`)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          let slice = res.data.slice(150);
          setCountries(slice);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search.q]);

  return (
    <div className="country-list">
      {countries.map((country) => (
        <Country
          capital={country.capital}
          name={country.name.common}
          population={country.population}
          region={country.region}
          flag={country.flags.png}
          key = {country.name.common}
          country = {country}
        />
      ))}
    </div>
  );
};

export default CountryList;
