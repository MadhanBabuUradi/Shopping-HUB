/* eslint-disable react/prop-types */
import './BrandCard.css';
const BrandCard = (props) => {
  return (
    <div className="brand-card">
        <div className="brand-card-img">
            <img src={props.img}></img>
        </div>
        <div className="brand-card-text">
            {props.name}
        </div>
    </div>
  )
}

export default BrandCard