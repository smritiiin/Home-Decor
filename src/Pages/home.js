import Nav from '../Components/Nav';
import {Button} from '../Components/Button';
import {Footer} from '../Components/Footer';
// import {ProductImg, ProductDetails} from '../Components/Product';
import LandingImg from '../Assets/landing6.jpg';
import {useState} from 'react';

const Home=()=>{
    return(
        <div>
            {/* Holds the NavBar */}
            <div className='fixed top-0 z-10 w-screen'>
                <Nav/>
            </div>
            {/* Main Content of landing page*/}
            <div className=' mt-8 overflow-hidden bg-slate-300 '>
                {/* <div className=' absolute border w-full mt-60'>
                    {/* <h1 className='text-5xl font-bold text-center p-8'> */}
                    {/* Make Your Home <br></br> */}
                    {/* Dream Home with Homely Decor</h1> */}
                    
                    {/* <p className='mt-2 text-white'>A home is what you make it! So turn your house with the variety of decorative items of Homely Decor.</p> */}
                    {/* <Button
                        type="submit"
                        value= "Shop now"
                        className={"border ml-72 hover:bg-[#FFFFFF] hover:text-black text-white font-bold py-2 px-4"}
                        onClick={()=> console.log("Hiii")}>
                    </Button> */}
                {/* </div>  */}
                {/* max-h-screen w-11/12 m-auto */}
                <img className=" w-11/12 m-auto" src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg" alt="Landing"/>     
                         
            </div>
        

            {/* Footer Component at bottom of screen.*/}
            <div>
                <Footer/>
            </div>
        </div>
       
    )
}



export default Home;