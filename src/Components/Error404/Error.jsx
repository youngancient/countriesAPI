import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const themes = useContext(ThemeContext);
  return (
    <div className={`error ${themes.layoutBG} ${themes.primaryText}`}>
      <div className="img">
        <img src="error.png" alt="404 error" className="" />
      </div>
      <div className="error-other">
        <h3>404</h3>
        <p>Page not found</p>
        <button onClick={handleClick} className={`${themes.componentBG} ${themes.shadow} ${themes.primaryText}`} >Go home</button>
      </div>
    </div>
  );
};

export default Error;
