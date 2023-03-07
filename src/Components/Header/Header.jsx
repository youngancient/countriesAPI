import { useContext } from "react";
import ThemeContext from "../../Utils/ThemeContext";
import "./style.css";

const Header = ({ toggleTheme }) => {
  const themes = useContext(ThemeContext);
  return (
    <header className={`${themes.componentBG} ${themes.shadow}`}>
      <nav className="">
        <h2 className={themes.primaryText}>Where in the world?</h2>
        <div className="theme-switch">
          <button className={themes.primaryText} onClick={toggleTheme}>
            {themes.name === "dark" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
            <p>Dark Mode</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
