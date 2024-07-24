/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { setProductDetail } from '../../redux/productDetail';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig/FirebaseConfig';

const ProductCard = (props) => {

    const [isLoading, setIsLoading] = useState(false);

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
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    //const productDetail = useSelector((state)=>(state.productDetail.value));
    const clickHandler = (id, name, price, img, description, rating) => {
        setIsLoading(true);
        dispatch(setProductDetail({ id, name, price, img, description, rating }));
        try {
            id = id.toString();
            addProductData(id);
            navigate(`/product-detail/${id}${encodeURIComponent(name)}`);
        } catch (error) {
            console.error('Error occurred:', error);
        }finally{
            setIsLoading(false);
        }
    };
    

    useEffect(() => {
        const cards = document.querySelectorAll(".card-product");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            });
        }, {
            threshold: 0.5
        }
        );

        cards.forEach(card => {
            observer.observe(card);
        });
        } 
    );
  return (
    <div className='card-product' onClick={()=>clickHandler(props.id,props.name,props.price,props.img,props.description,props.rating)}>
        <div className='card-product-img'>
            <img src={props.img}></img>
            <div className='like'><i className='pi pi-heart'></i></div>
        </div>
        <div className='card-product-detail'>
            <div className='details'>
                <div className='name'>{props.name}</div>
                <div className='description'>{props.description}</div>
                <div className='rating'>
                    <div className='rating-number'>Rating:-({props.rating})</div>
                </div>
                <button className='add-to-cart'>Add to Cart</button>
            </div>
            <div className='price'>${props.price}</div>
        </div>
        {isLoading && <div className="loading">Loading...</div>}
    </div>
  )
}

export default ProductCard