export const Button=
({type, value, onClick, disabled, className, buttonStyle})=>{
    return(
        <button
        type= {type}
        onClick={onClick}
        disabled={disabled}
        className={className}
        style={{...styles.button, ...buttonStyle}}>
            {value}
        </button>
    )
}

const styles={
    button:{
        display:"flex",
        height:40,
        borderRadius:8,
        fontSize:20,
        width:130,
        padding: 5,
        justifyContent:"center",
        transition:"ease-in-out",
        transitionDelay:300,
        // color: "#ffffff" ,
        
    }
}

