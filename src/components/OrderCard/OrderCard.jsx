/* eslint-disable react/prop-types */
import './OrderCard.css'
const OrderCart = (props) => {
  return (
    <div className='cart-card-container'>
    <div className='cart-card'>
        
        <div className='cart-card-image-and-name'>
            <div className='cart-card-image'><img src={props.image}></img></div>
            <div className='cart-card-name'>{props.name}</div>
        </div>
        <div className='cart-card-price-and-delete-and-quantity'>
            <div className='cart-card-price'>${props.price}</div>
            <div className='cart-card-quantity'>
                <div className='cart-card-quantity-number' style={{display:'flex',marginBottom:"0.3rem"}}>{props.quantity}</div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Quantity</div>
            </div>
        </div>
        <div className='cart-card-total-price'>${props.quantity * props.price}</div>
    </div>
    </div>
  )
}

export default OrderCart