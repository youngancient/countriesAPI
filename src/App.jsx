import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import CountryDetail from "./Pages/CountryDetail/CountryDetail";
import ThemeContext, { themes } from "./Utils/ThemeContext";
import { AnimatePresence } from "framer-motion";
import Error from "./Components/Error404/Error";


function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };
  localStorage.setItem('theme',JSON.stringify(theme));
  return (
    <ThemeContext.Provider value={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route index element={<Main />}></Route>
              <Route path="/:country" element={<CountryDetail />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Routes>
          </AnimatePresence>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
