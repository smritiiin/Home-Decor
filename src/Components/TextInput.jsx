// import { AiFillEyeInvisible } from "react-icons/ai"

 export const TextInput =({placeholder,type, className, disabled, maxLength, name}) => {
    return(
            <div>
                <input
                    placeholder={placeholder}
                    name={name}
                    // onChange={(e)=>{onChange(e.target.value)}}
                    type={type}
                    className="block text-md font-medium text-gray-900 p-2 mx-10 mb-3 rounded-md w-60"
                    disabled= {disabled}
                    maxLength={maxLength}
                >
                </input>
            </div>
           
    )
}

// export default TextInput;