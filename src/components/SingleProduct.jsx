import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'

function SingleProduct(){
    //id ila theesukunte object vasthadhi adhe ila {id} destructuring chesi theesukunte lopala id value vasthadhi
    const {id} = useParams()
    console.log(id)
    
    const[SingleProduct,setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchData(){
            try {
                let res = await fetch(`https://fakestoreapi.com/products/${id}`)
                let jsonRes = await res.json();
                setSingleProduct(jsonRes)
            } catch (error) {
                console.log(error)
            } finally {
        setLoading(false);
      }
        }
    
  fetchData();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Product not found
  if (!SingleProduct || !SingleProduct.id) {
    return (
      <div className="no-product">
        <h1>🔍 Product Not Found</h1>
        <p>
          Sorry, the product you are looking for does not exist.
        </p>

        <Link to="/" className="back-home-btn">
          Back To Products
        </Link>
      </div>
    );
  }

  return (
    <div className="single-product" >
      <img
        src={SingleProduct.image}
        alt={SingleProduct.title}
      />

      <div className="single-content">
        <h1>{SingleProduct.title}</h1>

        <p>{SingleProduct.description}</p>

        <h2>${SingleProduct.price}</h2>

        <h3>⭐ {SingleProduct.rating?.rate}</h3>
      </div>
    </div>
  );
}

export default SingleProduct;