// import { AiFillEyeInvisible } from "react-icons/ai"

 export const TextInput =({placeholder,type, className, disabled, maxLength, name}) => {
    return(
            <div>
                <input
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    className="block text-md font-medium text-gray-900 p-2 mx-10 mb-3 rounded-md w-72 border"
                    disabled= {disabled}
                    maxLength={maxLength}
                >
                </input>
            </div>
           
    )
}

// export default TextInput;