/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';
import './SideBar.css';
import {motion} from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { addOrder } from '../../redux/orders';
import { useDispatch, useSelector } from 'react-redux';



function SideBar({ onDataUpdate }) {

  const [childInput, setChildInput] = useState('account');

  const sendDataToParent = (s) => {
    setChildInput(s);
    onDataUpdate(s); 
  };

  useEffect(() => {}, [childInput]);

  const [user,setUser] = useState(null);
  const [authUser] = useAuthState(auth);

  const [order,setOrder] = useState([]);

  useEffect(() => {
    if(authUser){
      setUser(authUser);
    }
  },[authUser])

  const dispatch = useDispatch();

  const getOrders = useCallback(async () => {
    if (user && user.email) {
      const productDocRef = doc(db, 'users', user.email);
      const productDocSnap = await getDoc(productDocRef); 
      if (productDocSnap.exists()) {
        const orderList = productDocSnap.data().order;
        console.log("the orderlist:",orderList);
        setOrder(orderList);
        dispatch(addOrder(orderList)); 
      }
    }    
  },[dispatch, user])
  useEffect(()=>{
    dispatch(addOrder(order));
    getOrders();
  },[getOrders,dispatch])
  const orders = useSelector((state)=>(state.orders.value));
  console.log("the redux order",orders);
  console.log("the state order",order);
    return (
        <motion.div
          initial={{ x: -1000 }} 
          animate={{
            x: 0,
            transitionEnd: {
              x: 0,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            loop: Infinity, 
            repeatDelay: 2, 
          }}
          className="sidebar"
          style={{ willChange: "transform" }}
        >
          <div className="sidebar-item"  onClick={()=>sendDataToParent("account")} >
            <div className="sidebar-item-icon">👤</div>
            <div className="sidebar-item-text">Account</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("orders")}>
            <div className="sidebar-item-icon">📦</div>
            <div className="sidebar-item-text" onClick={getOrders} >Orders</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("settings")}>
            <div className="sidebar-item-icon">⚙️</div>
            <div className="sidebar-item-text" >Settings</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("feedback")}>
            <div className="sidebar-item-icon">ℹ️</div>
            <div className="sidebar-item-text" >Feedback</div>
          </div>
        </motion.div>
      );
}

export default SideBar;
