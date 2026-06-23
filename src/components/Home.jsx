import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'


function Home(){
    const [products,setProduct] = useState([])
    //page load ayinappude ravali ante componentDidMount vadatham but ikkada useEffect with [] istham
    useEffect(()=>{
        async function fetchData(){
            try {
                let res= await fetch("https://fakestoreapi.com/products",{method:"GET"})
                let jsonRes= await res.json()
                setProduct(jsonRes)
            } catch (error) {
               console.log(error) 
            }
        } 
        fetchData()    
    },[])
    return(
         <div className="products-container">
            <h1>🛍️ All Products</h1>
            <div className="products-grid">
            {
            products.map((item)=>(
                <div className="product-card"  key={item.id}>
                <Link to={`/products/${item.id}`} >
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
                    <p>{item.description}</p>
                    <h2>Price: {item.price}</h2>
                    <h2><span>Rating:</span>⭐ {item.rating.rate}</h2>
                    <button className="add-btn">
                        Add To Cart
                    </button>
                </Link >
                </div>
            ))
        }
        </div>
        </div>
    )
}
export default Home;