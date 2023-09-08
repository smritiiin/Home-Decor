import {Button} from './Button';
//SIgn In and Sign up button div 
   export const signInSignUpDiv = ()=>{
        return(
            <div className=" flex justify-center h-12 border">
                <div className="flex bg-[#F0EFF2] rounded-xl p-1">
                    <Button 
                    type={"submit"}
                    value= {"Sign In"}
                    className={"transition ease-in-out delay-150 bg-[#F0F0F2] hover:bg-[#FFFFFF] hover:text-black text-[#FFFFFF] font-bold py-2 px-4"}
                    />
                    <Button 
                    type={"submit"}
                    value= {"Sign Up"}
                    className={"transition ease-in-out delay-150 bg-[#FFFFFF]  text-black font-bold py-2 px-4 rounded hover:bg-[#F0F0F2] duration-300"}
                    />
                </div>
            </div> 
        )
   }
  