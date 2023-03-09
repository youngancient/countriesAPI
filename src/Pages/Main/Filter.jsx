import { ConfigProvider, Select, Space, theme } from "antd";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

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
    label: "All",
  },
];
const Filter = ({
  filter,
  setFilter,
  setCountries,
  duplicate,
  error,
  setLoading,
  setError,
  search,
}) => {
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
      axios
        .get(`https://restcountries.com/v3.1/region/${filter.q}`)
        .then((res) => {
          setLoading(true);
          if (!search.isSearch) {
            setCountries(res.data);
          } else {
            let whole = res.data;
            let newWhole = whole.filter((ele) => {
              if (ele.name.common.toLowerCase().includes(search.q)) {
                return ele;
              }
            });
            setCountries(newWhole);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError("ish");
        });
    } else {
      setCountries(duplicate);
    }
  }, [filter.q]);
  const navigate = useNavigate();
  if(error){
    navigate('/404');
  }
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
