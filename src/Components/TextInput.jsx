// import { AiFillEyeInvisible } from "react-icons/ai"

 export const TextInput =({placeholder,type, inputStyle, className, onTextChange, disabled, maxLength, value}) => {
    return(
            <div style={inputStyle}>
                <input
                    placeholder={placeholder}
                    onChange={onTextChange}
                    type={type}
                    className={className}
                    style={{ ...inputStyle}}
                    disabled= {disabled}
                    maxLength={maxLength}
                >
                    {value}
                </input>
            </div>
           
    )
}

// export default TextInput;