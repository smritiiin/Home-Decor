import Nav from '../Components/Nav';
import {Footer} from '../Components/Footer';
import {getProduct} from '../API/getProduct';
import {useState, useEffect} from 'react';
import Card from '../Components/Card';
import LandingImg from '../Assets/landing6.jpg';

const Home=()=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const getAllProducts = async () => {
        setLoading(true);
        try {
        const resp = await getProduct();
        setProducts(resp);
        } catch (e) {
        console.log(e);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            {/* Holds the NavBar */}
            <div className='fixed top-0 z-10 w-screen'>
                <Nav/>
            </div>
            <div className=' mt-12'>
                <img src={LandingImg} alt='Loading....'></img>
            </div>
            
            {products.map((card, index) => (
                <div
                key={index}
                style={{ display: "flex", marginBottom: "20px", marginRight: "30px" }}
                >
                <Card
                    key={card._id}
                    image={card?.image[0]}
                    title={card.productName}
                    description={card.description}
                    price={card.price}
                />
            </div>
            ))}
    

            {/* Footer Component at bottom of screen.*/}
            <div>
                <Footer/>
            </div>
        </div>
    )}

export default Home;
