import { useSelector } from 'react-redux';
import OrderCart from '../../components/OrderCard/OrderCard'
import './OrderSection.css'
import { useEffect } from 'react';

const OrderSection = () => {

  const order = useSelector((state)=>(state.orders.value));
  console.log(order);
  

  useEffect(() => {
    console.log(order);
  },[order])

  return (
    <div className='order-section'>
        <div className='heading'>
            Order Section
        </div>
        <div className='order-section-container'>
            {order &&
              order.map((item)=>{
                return <div key={item.id}> <OrderCart key={item.id} id={item.id} name={item.productName} price = {item.productPrice} quantity = {item.productQuantity} image={item.productImage} /><hr key={1} /></div>
              })
            }
            <hr/>
        </div>
    </div>
  );
} 
export default OrderSection;