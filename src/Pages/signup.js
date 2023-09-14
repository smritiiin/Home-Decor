import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../API/signup';

import coverimg from "../Assets/loginsvg.svg";
import google from '../Assets/google.png'
import facebook from './../Assets/facebook.png'
import microsoft from './../Assets/microsoft.png'

export const Signup=()=>{
    // const [email,setEmail]= useState('');
    // const [isValidEmail, setIsValidEmail] = useState(true);
    const [signupFields, setSignupFields] = useState(
        {
            fname: "",
            lname: "",
            email: "",
            number: "",
            password:"",
            confirmPassword:"",
        }
    );

    const checkPasswordsMatch = () => {
        if (signupFields.password !== signupFields.confirmPassword) {
          return alert("Passwords didnot match!");
        }
        return true;
      };


    const onSubmit = async (e) => {
       console.log("CLICKED");
       e.preventDefault();
        if (checkPasswordsMatch()) {
          const response = await signup(signupFields);
          if (response.success) {
            alert("User registered successfully!");
            console.log(signupFields)
          } else {
            alert(response.error);
          }
        }
      };

    

    return(
        // container div 
        <div className="grid grid-cols-2 h-full p-10 mx-6 overflow-hidden max-[600px]:flex">
            <style>{'body { background-color: #e1e8ff; }'}</style>
            {/*signup form div*/}
            <div className="grid p-4 bg-[#f0f4ff] max-h-full mb-10 " >
                <div>
                    <h1 className="text-4xl text-center font-semibold mb-8">
                        Homely Decor
                    </h1>
                </div>
                
              {/* signup form */}
                <div className="grid grid-cols place-items-center mt-8">
                    <form>
                        <input
                            placeholder="First Name"
                            type="text"
                            maxLength={10}
                            style={styles.input}
                            onChange={(text)=> 
                                setSignupFields({ ...signupFields,fname:text.target.value})
                            }
                        />
                        <input
                            placeholder="Last Name"
                            type="text"
                            maxLength={10}
                            style={styles.input}
                            onChange={(text)=> 
                                setSignupFields({ ...signupFields,lname:text.target.value})
                            }
                        />
                        <input
                            placeholder="Email"
                            type="text"
                            style={styles.input}
                            onChange={(text)=>
                                setSignupFields({...signupFields,email:text.target.value})}
                            // value={email}
                        />
                        <input
                            placeholder="Contact Number"
                            type="number"
                            maxLength={10}
                            style={styles.input}
                            onChange={(text)=>
                                setSignupFields( {...signupFields, number:text.target.value})}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            style={styles.input}
                            onChange = {(text) =>setSignupFields ({...signupFields, password: text.target.value})}
                        />                       
                        
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            style={styles.input}
                            onChange={(text)=>setSignupFields({...signupFields, confirmPassword: text.target.value })}
                        />
                                                
                        {/* sign in button */}
                        <div className=" flex justify-center">
                            <button
                                className={"bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 hover:bg-[#FFFFFF] hover:text-blue-500 rounded-md mt-5"}
                                onClick={onSubmit}
                            >Sign Up</button>
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
const styles ={
    input:{
        display: "block",
        borderRadius: ".34rem",
        padding: '0.5rem',
        fontWeight: 500,
        color: "rgb(17 24 39 / var(--tw-text-opacity))",
        marginLeft: '2.5rem',
        marginRight: '.5rem',
        marginTop: '.25rem',
        width: '18rem',
        borderWidth: '1px'
    }
}
 