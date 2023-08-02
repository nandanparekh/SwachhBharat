import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";


function Navbar() {
   
  
    const navigate = useNavigate()
    function logOut() {
       
        localStorage.clear()
        navigate("/Homepage");
        // console.log(localStorage.getItem("token"));
    }
    
  return (
    <>
    <nav className='Navbaritems'>
     <Link to ="/" className='logo'>
     <span>SwachhBharat</span>
     </Link>
     <div className='Nav-custom-menu'>

     <ul className='Nav-menu'>
       <li><Link className='Nav-link' to="/">
              Dashboard
           </Link>
       </li>
       <li><Link to="/Updatelogin" className='Nav-link'>
              Nandan
           </Link>
       </li>
       <li onClick={() => {logOut()}} className='Nav-link'>
         LogOut
       </li>
       {/* <button className='logoutbtn' >LogOut</button> */}
     </ul>
     </div>
    </nav>
   </>
  );

}
    export default  Navbar;
      