import { useContext, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";
import { motion } from "framer-motion";

const countryVariants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  final: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
// const underVariants = {
//   initial: {
//     height: 0,
//   },
//   final: {
//     height: "auto",
//     transition: {
//       duration: 1.2,
//     },
//   },
// };
const Country = ({ capital, name, population, region, flag }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${name}`);
  };

  const themes = useContext(ThemeContext);
  return (
    <motion.div
      className={`country ${themes.shadow}`}
      onClick={handleClick}
      variants={countryVariants}
      viewport={{ once: true }}
      initial="initial"
      whileInView="final"
    >
      <div className="country-img">
        {/* <img src={flag} alt={name} className="" loading="lazy" /> */}
        <LazyLoadImage
          src={flag}
          alt={name}
          effect="blur"
          width={320}
          height={200}
          placeholderSrc="/placeholder.jpg"
        />
      </div>
      <div className={`under ${themes.componentBG} ${themes.primaryText}`}>
        <div>
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
              <p className={`value ${themes.minorText}`}>
                {capital === undefined ? "None found" : capital.toString()}
              </p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Country;
