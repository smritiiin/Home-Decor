import {Button} from "./../Components/Button";
import {TextInput} from "./../Components/TextInput";
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import coverimg from "../Assets/loginsvg.svg";
import google from '../Assets/google.png'
import facebook from './../Assets/facebook.png'
import microsoft from './../Assets/microsoft.png'

const Login=()=>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

   const handlesubmit =(e)=>{
    e.preventDefault();
    console.log("Submitted")
   }
   const errorfunction = (e)=>{
    if (!userName || !password){
        alert('Please fill all the fields')
        
    }
   }
    return(
        // container div 
        <div className="grid grid-cols-2 p-10 mx-6 overflow-hidden max-[600px]:flex">
            <style>{'body { background-color: #e1e8ff; }'}</style>
            {/*login form div*/}
            <div className="grid p-4 gap-y-10 bg-[#f0f4ff] max-h-full mb-10 " >
                <div>
                    <h1 className="text-4xl text-center font-semibold mb-8">
                            LOGO
                        </h1>
                </div>
                <div>
                    <h1 className="text-center text-4xl ">
                        Welcome Back
                    </h1>
                </div>

                {/* *SIgn In and Sign up button div */}
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
                        // onClick={navigate("/signup")}
                        />
                    </div>
                

                </div> 
              
              {/* login form */}
                <div className="grid grid-cols place-items-center ">
                    <form onSubmit={handlesubmit && errorfunction}>
                        <TextInput
                            placeholder="Username"
                            type="text"
                            name= "userName"
                            maxLength={10}
                            // className="block text-md font-medium text-gray-900 p-2 mx-10 my-3 rounded-md"
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                        <TextInput
                            placeholder="Password"
                            type="password"
                            name="password"
                            maxLength= {16}
                            // className="block text-md font-medium text-gray-900 p-2 mx-10 mb-3 rounded-md"
                            onChange={(e)=>setPassword(e.target.value)}

                        />
                {/* sign in button */}
                <div className=" flex justify-center">
                    <button
                    type="submit"
                    className="bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 rounded-md hover:bg-[#FFFFFF] hover:text-blue-500"
                    // onClick={()=>{navigate("/home")}}
                    >Continue</button>
                </div>
                </form>
                </div>
                <div style={{marginTop:20,marginBottom:0}}>
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
                        <div className="flex justify-center">
                            <ul className="inline-flex my-5"> 
                                <li  className="mr-4"><img className="h-8" src={google} alt='Google'></img></li>
                                <li className="mr-4"><img className="h-8" src={facebook} alt='Facebook'></img></li>
                                <li className="mr-4"><img className="h-8" src={microsoft} alt='Microsoft'></img></li>
                            </ul>
                        </div>

                        <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                            <p>Don't have an account? </p>
                            <Link to="/signup" className="text-blue-500 underline ml-1"> Sign up </Link>
                        </div>
                    </div>
            </div>

            {/* image div on the right */}
            <div className="max-h-full mb-10 overflow-hidden max-[600px]:hidden">
                <img src={coverimg} alt=" background cover" className="w-auto h-full bg-blue-50"></img>
            </div> 
        </div>
        
        
    )
}

export default Login;

 