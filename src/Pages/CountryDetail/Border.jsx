import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Utils/ThemeContext";

const Border = ({border}) => {
    const themes = useContext(ThemeContext);
    const navigate = useNavigate();
    const name = border.name.common;
    const handleClick =()=>{
        navigate(`/${name}`,{state: border});
    }
    return ( 
        <div className={`bcont ${themes.componentBG} ${themes.shadow} ${themes.primaryText}`} onClick={handleClick}>
            <p>{name}</p>
        </div>
     );
}
 
export default Border;