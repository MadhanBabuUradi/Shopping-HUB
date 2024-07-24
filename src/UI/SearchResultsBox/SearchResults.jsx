/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import './SearchResults.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProductDetail } from '../../redux/productDetail';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig/FirebaseConfig';

const SearchResults = (props) => {
  const name = "search-results-box" + "-" + props.name.toString();

  const productArray = useSelector((state) => state.productlist.value);
const [results, setResults] = useState([]);

useEffect(() => {
    if (props.inputValue === "") {
        setResults([]);
        return;
    }

    let filteredResults = [];

    for (let i = 0; i < productArray.length; i++) {
        const filteredProducts = productArray[i]['products'].filter((product) =>
            product.name.toLowerCase().includes(props.inputValue.toLowerCase())
        );
        filteredResults = filteredResults.concat(filteredProducts);
    }

    setResults(filteredResults);
}, [props.inputValue, productArray]);


const addProductData = async (productId) => {
    try {
        const productDocRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productDocRef);

        if (docSnapshot.exists()) {
            console.log('Product data already exists.');
            return;
        } else {
            const productInfo = {
                rating: [],
                discuss: []
            };
            await setDoc(productDocRef, productInfo);
            console.log('Product data added successfully.');
        }
    } catch (error) {
        console.error('Error adding product data:', error);
    }
};

    const dispatch = useDispatch();
    const productDetail = useSelector((state)=>(state.productDetail.value));
    const navigate = useNavigate();

    const clickHandler = (id,name,price,img,description,rating) => {
        console.log(productDetail);
        dispatch(setProductDetail({ id, name, price, img, description, rating }));
        try {
            id = id.toString();
            addProductData(id);
            navigate(`/product-detail/${id}${encodeURIComponent(name)}`);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

  return (
    <div className={name}>
    <div className="search-results-box-content">
        {results.map((product) => (
            <div className='product-in-search' key={product.id} onClick={()=>clickHandler(product.id,product.name,product.price,product.img,product.description,product.rating)}>
                    {product.name}
            </div>
        ))}
    </div>
</div>
  );
};

export default SearchResults;
