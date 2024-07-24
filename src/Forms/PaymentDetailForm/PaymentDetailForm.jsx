/* eslint-disable react/prop-types */
import './PaymentDetailForm.css'
import SelectCountry from '../../UI/SelectCountry'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig/FirebaseConfig';
import { setCart } from '../../redux/cart';
import { addOrder } from '../../redux/orders';
import { setTotalPrice } from '../../redux/totalPrice';
const PaymentDetailForm = (props) => {
    var price = 0;
    if (props.check === true){
        price = props.buy;
    }
    const totalPrice =useSelector((state)=>(state.totalPrice.value));
    useEffect(()=>{
        console.log(totalPrice);
    },[totalPrice])
    if (props.check === false){
        price = totalPrice;
    }

    const dispatch = useDispatch();

    const {user} = props;

    const {productDetail1} = props;

    const addToOrder = async ()=>{
        console.log(productDetail1);
        toast.success('Successfully Bought Product!')
        const productDocRef = doc(db, 'users', user.email);
        const docSnapshot = await getDoc(productDocRef);
        if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            const updatedOrder = userData.order || [];
            updatedOrder.unshift({ productName: productDetail1.name, productPrice: productDetail1.price, productQuantity: productDetail1.quantity ,productImage:productDetail1.img});
            await updateDoc(productDocRef, { order: updatedOrder });
            console.log('Order data added successfully.');
        } else {
            console.log('User document does not exist.');
        }
    }

    const reduxCart = useSelector((state)=>(state.cart.value));

    const addToOrderAll = async () => {
        if (reduxCart.length > 0) {
            const productDocRef = doc(db, 'users', user.email);
            const docSnapshot = await getDoc(productDocRef);
    
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                const updatedOrder = userData.order || [];
    
                for (var i = 0; i < reduxCart.length; i++) {
                    updatedOrder.unshift({
                        productName: reduxCart[i].productName,
                        productPrice: reduxCart[i].productPrice,
                        productQuantity: reduxCart[i].productQuantity,
                        productImage: reduxCart[i].productImage,
                    });
                }
                dispatch(setCart([]));
                dispatch(addOrder(updatedOrder)); 
                dispatch(setTotalPrice(0)); 
    
                await updateDoc(productDocRef, { cart: [], order: updatedOrder });
    
                console.log('Order data added successfully.');
            } else {
                console.log('User document does not exist.');
            }
        }
    };
    
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [postalCodeInput, setPostalCodeInput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    
        if (stateInput === '' || cityInput === '' || postalCodeInput === '') {
            toast.error('Please fill out all required fields.');
            return;
        }
        if (props.check === true) {
            addToOrder();
        } else {
            addToOrderAll();
        }
        setStateInput('');
        setCityInput('');
        setPostalCodeInput('');
    }

  return (
    <form className="payment-detail-form" onSubmit={submitHandler} >
        <div className="subtotal-section">
            <div className="subtotal-text">Subtotal</div>
            <div className="subtotal-price">${price}</div>
        </div>
        <hr/>
        <div className="shipping-section">
            <div className="shipping-text">Shipping</div>
            <div className="shipping-country">
                <div className="shipping-country-text">Country</div>
                <div className="shipping-country-dropdown">
                    <SelectCountry/>
                </div>
            </div>
            <div className="shipping-state">
                <div className="shipping-state-text">State</div>
                <div className="shipping-state-input">
                    <input type="text" placeholder="State" onChange={(e)=>setStateInput(e.target.value)}/>
                </div>
            </div>
            <div className="shipping-city">
                <div className="shipping-city-text">City</div>
                <div className="shipping-city-input">
                    <input type="text" placeholder="city" onChange={(e)=>{setCityInput(e.target.value)}} ></input>
                </div>
            </div>
            <div className="shipping-postal">
                <div className="shipping-postal-text">Postal Code</div>
                <div className="shipping-postal-input">
                    <input type="number" placeholder='postal code' onChange={(e)=>setPostalCodeInput(e.target.value)} ></input>
                </div>
            </div>
        </div>
        <hr/>
        <div className='coupon-code-section'>
            <div className='coupon-code-text'>Coupon Code</div>
            <div className='coupon-code-input'>
                <input type="text" placeholder='currently no coupon code is applicable'></input>
                <button disabled={true}>Apply</button>
            </div>
        </div>
        <hr/>
        <div className="total-section">
            <div className="total-text">Grand Total</div>
            <div className="total-price">${price}</div>
        </div>
        <div className="payment-button">
            <button type='submit'>Cash on Delivery</button>
        </div>
    </form>
  )
}
export default PaymentDetailForm