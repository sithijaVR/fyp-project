import { Link, NavLink } from "react-router-dom";
import "./NavbarStyle.css";
import { signOut } from "firebase/auth";
import { database} from "../pages/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../utils/AuthContext";
function Navbar(){
    const user =useAuthContext()
    console.log(user)
    const history=useNavigate()
    const handleClick=()=>{
      signOut(database).then(val=>{
        console.log(val)
        history('/')
    })}
    
   return user? <nav> 
      
            
            <div>
                <ul id ="navbar">
                    <li><NavLink to="/home" exact>Home</NavLink></li>
                    <li><NavLink to="/Tutorial" >Tutorial</NavLink></li>
                    <li><NavLink to="/Datasheet" >Datasheet</NavLink></li>
                    <li><NavLink to="/LabPractical" >LabPractical</NavLink></li>
                </ul>
            </div>
            <div className="logo-container">
                <img src="" alt="Logo" />
            </div>
            <div><button onClick={handleClick}>SignOut </button></div>

        </nav>:<div></div>
}
export default Navbar;