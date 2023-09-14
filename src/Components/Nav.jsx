import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import { Cookies } from 'react-cookie';
import jwtDecode from "jwt-decode";

import logo from '../Assets/logo.png';

const Nav =()=>{
  const location = useLocation();
  const navigate= useNavigate();
  const cookies = new Cookies();

  function isTokenValid() {
    // extract the token value from the cookie
    const token = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("x-access-token="))
      ?.split("=")[1];
  
    // if there is no token, or it's an empty string, consider it invalid
    if (!token) {
      return false;
    }
  
    // decode the token and extract its payload
    const decodedToken = jwtDecode(token);
  
    // check if the token has expired
    const currentTime = Date.now() / 1000; // divide by 1000 to convert to seconds
    if (decodedToken.exp < currentTime) {
      return false;
    }

    // if the token is valid and not expired, return true
    return true;
  }
  
  const onButtonClick = ()=>{
    if (isTokenValid){
      cookies.remove("x-access-token", {path: "/"});
      return navigate("/");
    }
    return navigate("/login");
  };

  const isLinkActive = (link)=>{
    return location.pathname ===link;
  };

  if(location.pathname ==="/login" || location.pathname ==="/signup"){
    return null;
  }

  return (
      <div className='flex bg-[#023047] h-14 justify-between px-6 top-0
        items-center relative z-10 shadow-lg '>
        <div className='ml-5 mt-3 flex'>
          <img src={logo} alt='Home' className='h-9 w-9'/>
            <Link to="/" className='text-2xl text-white'>Homely Decor</Link>
        </div>
              <div className=' mt-4' >
                <ul className="flex">    
                      <li><NavLink to="/" className=" px-4" style={NavStyle} >Home</NavLink></li>
                      <li><NavLink to="/product" className=" px-4" style={NavStyle}>Add Product</NavLink></li>
                      <li><NavLink to="/login" className=" px-4" style={NavStyle}>Login</NavLink></li>
                      <li><NavLink to="/signup" className=" px-4" style={NavStyle}>Signup</NavLink></li>
                      <li style={styles.navbarItemStyle}>
                        <div
                          onClick={onButtonClick}
                          style={
                            isLinkActive("/login")
                              ? styles.activeLinkStyle
                              : styles.linkStyle
                          }
                        >
                          {isTokenValid ? "Logout" : "Login"}
                        </div>
                      </li>
                  </ul>
              </div>
            </div>
  );}

const NavStyle ={
  color: "#a2d2ff",
  display: "flex",
  alignItems: "center",
  textDecoration:" none",
  height: "100%",
  cursor: "pointer",
  transition: 'background-color 0.3s ease',
}

const styles ={
  navbarItemStyle: {
    marginLeft: "40px",
  },
  activeLinkStyle: {
    fontWeight: "bold",
    color: "#a2d2ff",
    cursor: "pointer",
  },
  linkStyle: {
    color: "#a2d2ff",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
}
export default Nav;



// Nav bar useEfect and useState
// https://stackoverflow.com/questions/71893935/make-tailwindcss-navbar-component-close-on-scroll