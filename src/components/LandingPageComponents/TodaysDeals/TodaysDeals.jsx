import { useEffect, useState } from 'react';
import './TodaysDeals.css'
import ProductCard from '../../ProductCard/ProductCard';
const TodaysDeals = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        if(data.products.length>0){
            setProducts(data.products);
            // console.log(data.products);
        }
        else{
            console.log("No data found");
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div>
    <div className='todays-deals-head'>
        Todays Best Deals For You
    </div>
    <div className='todays-deals-section' >
        {products.slice(0,20).map((product) => <ProductCard key={product.id} id={product.id*100000} img={product.images[0]} name={product.title} description={product.description} rating={product.rating} price={product.price} />)}
    </div>
    </div>
  )
}

export default TodaysDeals