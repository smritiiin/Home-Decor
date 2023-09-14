import Nav from '../Components/Nav';
import {addProduct} from '../API/addProduct';
import {useState} from 'react';

 const Addproduct = () => {

    const [productFields, setProductFields] = useState({
        productName: "",
        price:"",
        quantity:"" ,
        description:"",
        image:""
    });

    const handleChange= async (e)=>{
        e.preventDefault();
        console.log("OKAYY")

        const response = await addProduct(productFields);
          if (response.success) {
            alert("Product added successfully!");
            console.log(productFields)
          } else {
            alert(response.error);
          }
    }

    return (
       <div>
            <div>
                <Nav/>
            </div>
            <div className='mt-10'>
                <h1 className="text-center font-bold text-xl"> ADD PRODUCT</h1><br/><hr />
                <div className='flex justify-center mt-10'>
                    <form onSubmit={handleChange}>
                        <input
                            placeholder="Product Name"
                            type="text"
                            style={styles.input}
                            onChange={(text)=> 
                                setProductFields({ ...productFields,productName:text.target.value})
                            }
                        />
                        <input
                            placeholder="Price(in NRs)"
                            type="number"
                            style={styles.input}
                            onChange={(text)=> 
                                setProductFields({ ...productFields,price:text.target.value})
                            }
                        />
                        <input
                            placeholder="Quantity"
                            type="number"
                            style={styles.input}
                            onChange={(text)=> 
                                setProductFields({ ...productFields, quantity:text.target.value})
                            }
                        />
                        <input
                            placeholder="Description"
                            type="text"
                            style={styles.input}
                            onChange={(text)=> 
                                setProductFields({ ...productFields, description:text.target.value})
                            }
                        />
                        <input
                            placeholder="Image"
                            type="file"
                            style={styles.input}
                            onChange={(text)=> 
                                setProductFields({ ...productFields,image:text.target.value})
                            }
                        />
                        <button
                            className='bg-[#4e4ef3] text-[#FFFFFF] font-bold py-2 px-4 hover:bg-[#FFFFFF] hover:text-blue-500 ml-32 mt-10'
                        >ADD</button>

                    </form>
                </div>
               
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
        marginRight: '2.5rem',
        marginTop: '.25rem',
        width: '18rem',
        borderWidth: '1px'
    }
}

export default Addproduct;