import {Link, NavLink} from 'react-router-dom';
import logo from '../Assets/logo.png';
import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import {BsCartCheck} from 'react-icons/bs';
const Nav =()=>{
    return (
        <div>
            <div className='flex bg-[#5e6974] h-14 justify-between px-6
            items-center relative z-10 shadow-lg '>
              <div className='ml-5 mt-3 flex'>
                <img src={logo} alt='Home' className='h-9 w-9'/>
                <Link to="/" className='text-2xl text-white'>Homely Decor</Link>
              </div>
              <div className=' mt-4'>
                <ul className="flex">    
                      <li><NavLink to="/home" className=" px-4" style={NavStyle} >Home</NavLink></li>
                      <li><NavLink to="/login" className=" px-4" style={NavStyle}>Product</NavLink></li>
                      <li><NavLink to="/signup" className=" px-4" style={NavStyle}>About</NavLink></li>
                      <li><NavLink to="/" className=" px-4" style={NavStyle}>Blog</NavLink></li>
                      <li><NavLink to="/" className=" px-4" style={NavStyle}>Contact Us</NavLink></li>
                  </ul>
              </div>
              <div className=' mt-4'>
                  <ul className="flex">
                    <li className='text-xl px-1' style={NavStyle}><AiOutlineSearch/></li>
                    <li className='text-xl px-1' style={NavStyle}><BsCartCheck/></li>
                    <li className='text-xl px-1' style={NavStyle}><AiOutlineUser/></li>
                  </ul>
              </div>
                
            </div>
        </div>

       
  );
        
}

const NavStyle ={
  color: "#c8c4b8",
  display: "flex",
  alignItems: "center",
  textDecoration:" none",
  height: "100%",
  cursor: "pointer",
  transition: 'background-color 0.3s ease',
}

export default Nav;



// Nav bar useEfect and useState
// https://stackoverflow.com/questions/71893935/make-tailwindcss-navbar-component-close-on-scroll