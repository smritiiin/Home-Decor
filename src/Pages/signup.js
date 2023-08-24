import {React, useState} from 'react';
import {Button} from "./../Components/Button";
import {TextInput} from "./../Components/TextInput";
import {Link} from 'react-router-dom';

import coverimg from "../Assets/loginsvg.svg";
import google from '../Assets/google.png'
import facebook from './../Assets/facebook.png'
import microsoft from './../Assets/microsoft.png'

export const Signup=()=>{
    const [email,setEmail]= useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [signupFields, setSignupFields] = useState(
        {
            name: "",
            // email: "",
            number: "",
            password:"",
            confirmPassword:"",
        }
    );
    const handleChange = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail).toLowerCase();
    
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if entered email matches the regular expression
        setIsValidEmail(emailRegex.test(enteredEmail));
      };

    console.log('thiss', signupFields);

    const handleclick =(e)=>{
        e.preventDefault();
       if(!isValidEmail) {
        alert("Please enter a valid email");
       }
    }
    // const handleSubmit = async (event)=>{
    //     event.preventDefault();
    //     try{
    //        const response=  await fetch('http://localhost:8000/db', {userName, password});
    //        const token = response.data.token;
    //        localStorage.setItem("token", JSON.stringify({token}));
    //        window.location.href='/';
    //     }
    //     catch(error){
    //         console.log(`Error ${error}`);
    //         alert('Login failed. Please try again.'); 
    //     }
    // }
    return(
        // container div 
        <div className="grid grid-cols-2 h-screen p-10 mx-6 overflow-hidden max-[600px]:flex ">
            <style>{'body { background-color: #e1e8ff; }'}</style>
            {/*signup form div*/}
            <div className="grid gap-y-10 p-4 bg-[#f0f4ff] max-h-full mb-10 " >
                <div>
                    <h1 className="text-4xl text-center font-semibold mb-8">
                        LOGO
                    </h1>
                </div>
                {/**SIgn In and Sign up button div */}
                <div className=" flex justify-center h-12">
                    <div className="flex bg-[#F0EFF2] rounded-xl p-1">
                        <Button 
                        type={"submit"}
                        value= {"Sign In"}
                        className={"transition ease-in-out delay-150 bg-[#F0F0F2] hover:bg-[#FFFFFF] hover:text-black text-[#FFFFFF] font-bold py-2 px-4"}
                        // onClick={navigate("/")}
                        />

                        <Button 
                        type={"submit"}
                        value= {"Sign Up"}
                        className={"transition ease-in-out delay-150 bg-[#FFFFFF]  text-black font-bold py-2 px-4 rounded hover:bg-[#F0F0F2] duration-300"}
                        // onClick={navigate("/signup")}
                        />
                    </div>
                </div> 
              
              {/* signup form */}
                <div className="grid grid-cols place-items-center mt-8">
                    <form onClick={handleclick}>
                        <TextInput
                            placeholder="Name"
                            type="text"
                            maxLength={10}
                            onChange={(text)=> 
                                setSignupFields({ ...signupFields,name:text})
                            }
                        />
                        <input
                            placeholder="Email"
                            type="text"
                            className="block text-md font-medium text-gray-900 p-2 mx-10 mb-3 rounded-md w-60"
                            onChange={handleChange}
                            value={email}
                        />
                        <TextInput
                            placeholder="Contact Number"
                            type="number"
                            maxLength={10}
                            className="block text-md font-medium text-gray-900"
                            onChange={(text)=>
                                setSignupFields( {...signupFields  , contactNumber : parseInt (text)})}
                        />
                        <TextInput
                            placeholder="Password"
                            type="password"
                            maxLength= {16}
                            className="block text-md font-medium text-gray-900"
                            onChange = {(text) =>setSignupFields ({...signupFields, password: text})}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            type="password"
                            maxLength= {16}
                            className="block text-md font-medium text-gray-900"
                            onChange={(text)=>setSignupFields({...signupFields, confirmPassowrd: text })}
                        />
                {/* sign in button */}
                <div className=" flex justify-center">
                    <Button
                    type={"submit"}
                    value= {"Continue"}
                    className={"bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 hover:bg-[#FFFFFF] hover:text-blue-500"}
                    // onClick={()=>{navigate("/home")}}
                    />
                </div>
                </form>
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
                        <div className="flex justify-center">
                            <ul className="inline-flex my-5"> 
                                <li  className="mr-4"><img className="h-8" src={google} alt='Google'></img></li>
                                <li className="mr-4"><img className="h-8" src={facebook} alt='Facebook'></img></li>
                                <li className="mr-4"><img className="h-8" src={microsoft} alt='Microsoft'></img></li>
                            </ul>
                        </div>

                        <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                            <p>Already have an account? </p>
                            <Link to="/login" className="text-blue-500 underline ml-1"> Sign In </Link>
                        </div>
                    </div>
            </div>

            {/* image div on the right */}
            <div className="max-h-full mb-10 overflow-hidden max-[600px]:hidden ">
                <img src={coverimg} alt=" background cover" className="w-auto h-full bg-blue-50"></img>
            </div> 
        </div>
        
        
    )
}

 