import PaymentDetailForm from '../../Forms/PaymentDetailForm/PaymentDetailForm';
import CartCard from '../../components/CartCard/CartCard';
import './CartPage.css';
import { useEffect, useState } from 'react';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/cart';
import { setTotalPrice } from '../../redux/totalPrice';
import { toast } from 'react-hot-toast';
const CartPage = () => {

  const [incomingName,setIncomingName] = useState('');

  const chooseItem = (name) => {
    setIncomingName(name);
  }
  
  const [user,setUser] = useState(null);
  const [authUser] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (incomingName !== '') {
      console.log(incomingName);
      const deleteItem = async (user) => {
        console.log('Attempting to delete:', incomingName);
        toast.success('Item deleted successfully.');
        if (user && user.email) {
          console.log('User email:', user.email);
          const productDocRef = doc(db, 'users', user.email);
          const product = await getDoc(productDocRef);
          console.log('Product:', product);
          const newCart = product.data().cart;
          var updatedCart =[];
          for(var i=0;i<newCart.length;i++){
            if(newCart[i].productName !== incomingName){
              updatedCart.push(newCart[i]);
            }
          } 
          let updatedCartNew;  
          console.log('Updated Cart:', updatedCart);
          try {
            await updateDoc(productDocRef, {
              cart:updatedCart
            });
            dispatch(setCart(updatedCart));
            updatedCartNew = (await getDoc(productDocRef)).data().cart;
            console.log('Updated Cart New:', updatedCartNew);
            
            console.log('Item deleted successfully.');
            const productDocSnapshot = await getDoc(productDocRef);
            dispatch(setCart(productDocSnapshot.data().cart));
            console.log('Updated Cart Data:', productDocSnapshot.data().cart);
            console.log('Updated redux Data:', updatedCart);
          } catch (error) {
            console.error('Error deleting item:', error);
          }
          finally {
            let totalPrice = 0;
            for (var j = 0; j < updatedCartNew.length; j++) {
              totalPrice = totalPrice + updatedCartNew[j].productPrice * updatedCartNew[j].productQuantity;
            }
            dispatch(setTotalPrice(totalPrice)); 
          }
        }
      }
      deleteItem(user); 
    }
  }, [incomingName, dispatch, user]);

  useEffect(() => {
    if(authUser){
      setUser(authUser);
    }
  },[authUser])

  const [cartItems,setCartItems] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      const productDocRef = doc(db, 'users', user.email);
      const productDocSnap = getDoc(productDocRef);
      productDocSnap.then((doc) => {
        if (doc.exists()) {
          console.log(doc.data());
          setCartItems(doc.data().cart);
          dispatch(setCart(doc.data().cart));
          let total = 0;
          for(var i=0;i<doc.data().cart.length;i++){
            total = total + doc.data().cart[i].productPrice*doc.data().cart[i].productQuantity;
          }
          dispatch(setTotalPrice(total));
        }
      });
    }
  }, [dispatch, user]);

  const reduxCart = useSelector((state)=>(state.cart.value));

  console.log(cartItems);
  var authStatus = localStorage.getItem('isAuthenticated');
  if(authStatus==null){
    authStatus = false;
  }
  console.log(authStatus);  
  return (
    <>
    <div className='cartpage-section'>
        <div className='cart-card-container'>
            {authStatus && reduxCart.map((item)=>{
                return <div key={item.id}> <CartCard key={item.id} id={item.id} name={item.productName} price = {item.productPrice} quantity = {item.productQuantity} image={item.productImage} chooseItem={chooseItem} /><hr key={1} /></div>
            })}
            <hr/>
        </div>
        <div className='cart-page-pay'>
            <PaymentDetailForm check={false} buy={100} user={user} productDetail1 = {null} />
        </div>
    </div>
    </>
  )
}

export default CartPage