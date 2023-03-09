import { ConfigProvider, Select, Space, theme } from "antd";
import { useContext, useEffect } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "Americas",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Oceania",
    label: "Oceania",
  },
  {
    value: "",
    label: "None",
  },
];
const Filter = ({ filter, setFilter, countries, setCountries }) => {
  const themes = useContext(ThemeContext);
  const handleChange = (value) => {
    if (value == "") {
      setFilter({
        q: value,
        isFilter: false,
      });
    } else {
      setFilter({
        q: value,
        isFilter: true,
      });
    }
  };
  useEffect(() => {
    if (filter.isFilter) {
      const newCountries = countries.filter((country) => {
        return country.region === filter.q;
      });
      console.log(filter.q);
      console.log(newCountries);
    //   the last functionality ish is here, after updating the state to the filtered countries, 
    // when func gets to line 49 to filter again, it filters based on the reslt from the last filter
    // this returns an empty array
      setCountries(newCountries);
    }
  }, [filter.q]);
  return (
    <ConfigProvider
      theme={
        themes.name === "dark"
          ? {
              algorithm: theme.darkAlgorithm,
            }
          : {
              algorithm: theme.defaultAlgorithm,
            }
      }
    >
      <Select
        defaultValue="Filter by Region"
        size="large"
        className={`filter ${themes.componentBG} ${themes.primaryText}`}
        onChange={handleChange}
        options={options}
        dropdownStyle={
          themes.name === "dark"
            ? { backgroundColor: "hsl(209, 23%, 22%)" }
            : { backgroundColor: "hsl(0, 0%, 100%)" }
        }
      />
    </ConfigProvider>
  );
};

export default Filter;
