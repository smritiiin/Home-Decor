export const ProductImg= (props)=>{
    const { src, alt, border, title, style} = props;
    return(
        <div>
            <img
                src={src}
                alt={alt}
                border={border}
                title={title}
                style={style}
                className="h-52 w-52"
            />
        </div>
    )
}

export const ProductDetails =({title, price})=>
{
    return(
        <div>
            {/* product details go here... */}
           <h3> {title}</h3> 
           <p>Price: NRs {price} </p> 
        </div>
    )
}