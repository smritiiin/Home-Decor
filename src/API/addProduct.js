import axios from 'axios';

export const addProduct = async({productName, price, quantity, description, image}) =>{
    try{
        const res = await axios.post('http://localhost:8000/api/products', {
            productName,
            price,
            quantity ,
            description,
            image
        });

        const data = res?.data;
        return {success:true, data};
    }
    catch(err){
        if(
            err.res &&
            err.res?.status >= 400 &&
            err.res?.status <= 500
        ){
            return {
            success: false,
            error: err.res.data.message || err.res.data,
            };
        }
    }
};