import logo from '../Assets/logo.png';
import {Link, NavLink} from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
// import {Button} from '../Components/Button';
import {TextInput} from '../Components/TextInput';


export const Footer =()=>{
    return(
        <div className=" flex-col bottom-0 w-full bg-[#023047] px-10 py-4 text-white">
            <div className='flex'>
                <img src={logo} alt='Home' className='h-20 w-18'/>
                <Link to="/" className='text-2xl text-white'>Homely <br/> Decor</Link>
            </div>

            <div>
                <ul className="flex -ml-4 my-4">    
                      <li ><NavLink to="/home"  style={NavStyle} >Home</NavLink></li>
                      <li><NavLink to="/login"  style={NavStyle}>Product</NavLink></li>
                      <li><NavLink to="/signup" style={NavStyle}>About</NavLink></li>
                      <li><NavLink to="/"  style={NavStyle}>Blog</NavLink></li>
                      <li><NavLink to="/" style={{...NavStyle, ...styleFooter}} className=" border-r-0"> Contact Us</NavLink></li>
                </ul>            
            </div>

            <div className="flex justify-between mb-4">
                <div >
                    <p className='mb-2'>Follow us on:</p>
                    <ul className='flex'>
                        <li className='mr-4'><BsFacebook/> </li>
                        <li className='mr-4'><BsInstagram/></li>
                        <li><BsTwitter/></li>
                    </ul>
                </div>
                <div>
                    <p>Get the latest news from us</p>
                    <div className='flex'>
                        <TextInput placeholder="Your email address here" type="email"/>
                        <button type="submit" value="Subscribe" className='border bg-white text-black h-6 w-20'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#1d3557] py-2 px-7 -mb-4 -mx-10'>
                © 2023 All rights reserved.
            </div>
        </div>
    )
}

const NavStyle ={
    color: "white",
    display: "flex",
    padding:" 0 16px",
    borderRight: "1px solid white",
    alignItems: "center",
    textDecoration:" none",
    height: "100%",
    cursor: "pointer",
    transition: '0.5s ease',
  }

const styleFooter ={
    borderRight: 0,
}

