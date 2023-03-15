import { useContext } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const BasicError = () => {
  const themes = useContext(ThemeContext);
  return (
    <div className={`error ${themes.layoutBG} ${themes.primaryText}`}>
      <div className="img">
        <img src="error.png" alt="404 error" className="" />
      </div>
      <div className="error-other">
        <h3>404</h3>
        <p>No search results</p>
      </div>
    </div>
  );
};

export default BasicError;
