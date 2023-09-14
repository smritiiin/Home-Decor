import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import {login} from '../API/login';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import coverimg from "../Assets/loginsvg.svg";
import google from '../Assets/google.png'
import facebook from './../Assets/facebook.png'
import microsoft from './../Assets/microsoft.png'

const Login=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
  
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    
      const onLogin = async (e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        const resp = await login({ email, password });
        if (resp.success) {
            document.cookie = `x-access-token=${resp.data.token}; path=/;`;
            navigate("/");
        } else {
            alert("Something went wrong...")
            alert(resp.error);
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

                <signInSignUpDiv/>
                
              {/* login form */}
                <div className="grid grid-cols place-items-center ">
                    <form >
                        <input
                            placeholder="Email"
                            type="text"
                            name= "email"
                            className="block text-md font-medium text-gray-900 p-2 mx-10 my-3 rounded-md"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <div className="flex">
                            <input
                                placeholder="Password"
                                type={showPassword ? 'text': 'password'}
                                name="password"
                                value={password}
                                className="block text-md font-medium text-gray-900 p-2 ml-10 mr-3 mb-3 rounded-md"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            {showPassword ? (
                                    <FaEyeSlash onClick={handleTogglePasswordVisibility}/>
                                ) : (
                                    <FaEye onClick={handleTogglePasswordVisibility} />
                                )}
                        </div>

                {/* sign in button */}
                <div className=" flex justify-center">
                    <button
                    type="submit"
                    className="bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 rounded-md hover:bg-[#FFFFFF] hover:text-blue-500"
                    onClick={onLogin}
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

 