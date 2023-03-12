import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Utils/ThemeContext";
import { motion } from "framer-motion";

const borderVariants = {
    initial: {
        scale: 0.9,
        opacity: 0,
      },
      final: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
}

const Border = ({ border }) => {
  const themes = useContext(ThemeContext);
  const navigate = useNavigate();
  const name = border.name.common;
  const handleClick = () => {
    navigate(`/${name}`, { state: border });
  };
  return (
    <motion.div
      className={`bcont ${themes.componentBG} ${themes.shadow} ${themes.primaryText}`}
      onClick={handleClick}
      variants={borderVariants}
      initial = "initial"
      whileInView= "final"
      viewport={{once:true}}
    >
      <p>{name}</p>
    </motion.div>
  );
};

export default Border;
