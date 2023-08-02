import {Button} from "./../Components/Button";
import {TextInput} from "./../Components/TextInput";
import {useNavigate, Link, Routes, Route} from 'react-router-dom';
import Home from "./home";

import coverimg from "../Assets/cover.jpg";
import google from '../Assets/google.png'
import facebook from './../Assets/facebook.png'
import microsoft from './../Assets/microsoft.png'

const Login=()=>{
    
    const navigate= useNavigate()
    return(
        // container div 
        <div className="grid grid-cols-2 h-screen m-10"  >
            <style>{'body { background-image: linear-gradient(to right, #E5F3FD 0%,#E5F3FD 50%, #9ABDDC 50%,#9ABDDC 100% ); }'}</style>
            {/* login form div  */}
            <div className="grid grid-col space-y-auto p-4 bg-white" style={{height:'calc(100vh - 2.5rem)'}}>
                <div>
                    <h1 className="text-4xl text-center font-semibold">
                            LOGO
                        </h1>
                </div>
                <div>
                    <h1 className="text-center text-4xl">
                        Welcome Back
                    </h1>
                </div>
                {/**SIgn In and Sign up button div */}
                <div className=" flex justify-center h-12">
                    <div className="flex bg-[#F0EFF2] rounded-xl p-1">
                        <Button 
                        type={"submit"}
                        value= {"Sign In"}
                        className={"transition ease-in-out delay-150 bg-[#F0F0F2] hover:bg-[#FFFFFF] hover:text-black text-[#FFFFFF] font-bold py-2 px-4"}
                        onClick={navigate("/")}
                        />

                        <Button 
                        type={"submit"}
                        value= {"Sign Up"}
                        className={"transition ease-in-out delay-150 bg-[#FFFFFF]  text-black font-bold py-2 px-4 rounded hover:bg-[#F0F0F2] duration-300"}
                        onClick={navigate("/signup")}
                        />
                    </div>
                

                </div> 
              
              {/* login form */}
                <div className="grid grid-cols place-items-center">
                    <TextInput
                        placeholder="Username"
                        type="text"
                        maxLength={10}
                        className="block text-md font-medium text-gray-900"
                    />
                    <TextInput
                        placeholder="Password"
                        type="password"
                        maxLength= {16}
                        className="block text-md font-medium text-gray-900"
                    />
                    {/**
                     * Change the styles here
                     */}
                    <div style={{display: "flex", alignContent:"center", justifyContent: "center"}}>
                        <div style={{display: "flex", alignContent:"center", justifyContent:"center"}}>
                            <TextInput type="checkbox"
                            />
                            <p style={{ marginTop: 10}}>Remember</p> 
                        </div>
                        <div style={{marginTop: 10, marginLeft: 100}}>
                            <a href='#'>Forgot Password?</a>
                        </div>
                    </div>
                    
                </div>

                {/* sign in button */}
                <div className=" flex justify-center">
                    <Button
                    type={"submit"}
                    value= {"Continue"}
                    className={"bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 hover:bg-[#FFFFFF] hover:text-blue-500"}
                    onClick={()=>{navigate("/home")}}
                    />
                </div>
                <div style={{marginTop:30,marginBottom:0}}>
                        <div style={{
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent:"center", 
                            width:"60%",
                            margin:"auto" }}>

                            <div style={{flex: 1, height: '1px', backgroundColor: 'black', width:"1%"}} />
                            <div>
                                <p style={{width: '150px', textAlign: 'center'}}>Or Continue With</p>
                            </div>
                        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                        </div>
                        <div className="ml-60 mt-3 mb-6">
                            <ul className="inline-block ml-3"> 
                                <li  className="inline-block mr-4"><img className="h-8" src={google} alt='Google'></img></li>
                                <li className="inline-block mr-4"><img className="h-8" src={facebook} alt='Facebook'></img></li>
                                <li className="inline-block mr-4"><img className="h-8" src={microsoft} alt='Microsoft'></img></li>
                            </ul>
                        </div>

                        <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                            <p>Don't have an account? </p>
                            <Link to="/home" className="text-blue-500 underline ml-1"> Sign up </Link>
                            <Routes>
                                <Route exact path="/home" element={<Home/>}></Route>
                            </Routes>
                        </div>
                    </div>
            </div>

            {/* image div on the right */}
            <div className="overflow-hidden h-screen" style={{height:'calc(100vh - 2.5rem)'}}>
                {/* <h1 className="text-5xl">Image Goes Here</h1> */}
                <img src={coverimg} alt=" background cover" className="w-auto"></img>
            </div> 
        </div>
        
        
    )
}

export default Login;

 