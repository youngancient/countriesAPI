import { createContext } from "react"


export const themes ={
    dark:{
        name : "dark",
        primaryText: "darkPrimaryText",
        layoutBG : "darkLayoutBG",
        input : "hsl(0, 0%, 52%)",
        componentBG: "darkComponentBG",
        shadow: "darkShadow",
        minorText : "darkMinorText",
    },
    light:{
        name : "light",
        primaryText: "lightPrimaryText",
        layoutBG : "lightLayoutBG",
        input : "",
        componentBG:  "lightComponentBG",
        shadow : "lightShadow",
        minorText : "lightMinorText",
    }
}

const ThemeContext = createContext(themes.dark);
export default ThemeContext;