import Nav from '../Components/Nav';
import {Button} from '../Components/Button';
import {Footer} from '../Components/Footer';
import {ProductImg, ProductDetails} from '../Components/Product';
import LandingImg from '../Assets/landing4.jpg';
const Home=()=>{
    
    return(
        <div>
            {/* Holds the NavBar */}
            <div className='fixed inset-0 z-10 w-screen'>
                <Nav/>
            </div>
            {/* Main Content of landing page*/}
            <div className='h-screen mt-8 overflow-hidden bg-slate-300 '>
                <div className=' absolute  mt-24 left-1/4'>
                    <h1 className='text-5xl font-semibold text-center text-white'>
                    Make Your Home <br></br>
                    Dream Home with Homely Decor</h1>
                    
                    <p className='mt-2 text-white'>A home is what you make it! So turn your house with the variety of decorative items of Homely Decor.</p>
                    <Button
                        type={"submit"}
                        value= {"Shop now"}
                        className={"border ml-72 hover:bg-[#FFFFFF] hover:text-black text-white font-bold py-2 px-4"}
                        onClick="">
                    </Button>
                </div>
                <img className="max-h-screen w-11/12 m-auto" src={LandingImg} alt="Landing"/>                
            </div>
            
            {/* Featured Products */}
            <div className='mt-20'>
                <div className='flex flex-col justify-center items-center mb-8'>
                    <h1 className='text-3xl font-semibold'> Featured Products</h1>
                    {/* <p>$9,760 - $12,000</p> */}
                </div>
                   
                <div className='grid grid-flow-col items-center justify-center'>
                    <div className='m-4'>
                        <ProductImg
                            src= {LandingImg}
                            alt= "Product"
                        />
                        <ProductDetails
                            title = "Bed"
                            price="2345"
                        />
                    </div>
                        
                    <div>
                        <ProductImg
                        src= {LandingImg}
                        alt= "Product"
                        />
                        <ProductDetails
                        title = "Bed"
                        price="2345"
                        />
                    </div>   
                    <div className='m-4'>
                        <ProductImg
                            src= {LandingImg}
                            alt= "Product"
                        />
                        <ProductDetails
                            title = "Bed"
                            price="2345"
                        />
                    </div>
                        
                    <div>
                        <ProductImg
                        src= {LandingImg}
                        alt= "Product"
                        />
                        <ProductDetails
                        title = "Bed"
                        price="2345"
                        />
                    </div>  

                </div>
                <div className='flex justify-center mt-2'>
                    <Button
                        type="submit"
                        value="Shop Now"
                        onClick=""
                        className="border text-cyan-300"
                    />
                </div>
            </div>

            {/* New Arrivals */}
            <div className='mt-20 mb-20'>
                <div className='flex flex-col justify-center items-center mb-8'>
                    <h1 className='text-3xl font-semibold'> New Arrivals</h1>
                    {/* <p>$9,760 - $12,000</p> */}
                </div>
                   
                <div className='grid grid-flow-col items-center justify-center'>
                    <div className='m-4'>
                        <ProductImg
                            src= {LandingImg}
                            alt= "Product"
                        />
                        <ProductDetails
                            title = "Bed"
                            price="2345"
                        />
                    </div>
                        
                    <div>
                        <ProductImg
                        src= {LandingImg}
                        alt= "Product"
                        />
                        <ProductDetails
                        title = "Bed"
                        price="2345"
                        />
                    </div>   
                    <div className='m-4'>
                        <ProductImg
                            src= {LandingImg}
                            alt= "Product"
                        />
                        <ProductDetails
                            title = "Bed"
                            price="2345"
                        />
                    </div>
                        
                    <div>
                        <ProductImg
                        src= {LandingImg}
                        alt= "Product"
                        />
                        <ProductDetails
                        title = "Bed"
                        price="2345"
                        />
                    </div>  

                </div>
            </div>


            {/* Footer Component at bottom of screen.*/}
            <div>
                <Footer/>
            </div>
        </div>
       
    )
}



export default Home;