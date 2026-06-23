import { Link, NavLink } from "react-router-dom";
import '../App.css'


function Navbar(){

    const styles=({isActive})=>{
       //Destructuring:  const {isActive} = active
       return {                             //jsx lo stylings {} (object) lopala istham
        color: isActive ?  "#fff" : "#cbd5e1",
        background: isActive ? "linear-gradient(135deg,#06b6d4,#2563eb)" : "transparent",
        padding: "10px 22px",
        borderRadius: "12px",
        boxShadow: isActive
          ? "0 0 20px rgb(241, 247, 241)"
          : "none",
        transition: "all .3s ease",
       }
    }
    return(
        <nav>
           <NavLink to="/" style={styles}>Home</NavLink>
           <NavLink to="/about" style={styles}>About</NavLink>
           <NavLink to="/contact" style={styles}>contact</NavLink>
        </nav>
    )
}
export default Navbar;

//Link and NavLink both are used to change the path
//NavLink ki Link ki difference enti?

//NavLink:
//NavLink lo style attribute style={styles} use chesi link active lo undho ledho thelusthadhi
//styles anedhi oka function

//Link:
//Link lo style attribute work avvadhu "Something props error vathadhi"
//to:anedhi path change cheyadiniki vadatham
