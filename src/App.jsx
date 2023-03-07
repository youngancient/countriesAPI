import { useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import CountryDetail from "./Pages/CountryDetail/CountryDetail";
import ThemeContext, { themes } from "./Utils/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route index element={<Main />}></Route>
            <Route path="/:country" element={<CountryDetail />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
