/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './CategoryCard.css'
import { useDispatch, useSelector} from 'react-redux'
import { addCategory,clearCategory } from '../../redux/categoryFilter.js'
const CategoryCard = (props) => {
  const placeholderImage = 'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
      
  const onImageError = (e) => {
    e.target.src = placeholderImage
  }
  const dispatch = useDispatch();
  const categoryFilterArray = useSelector((state)=>state.categoryFilter.value);

  const clickHander = (text) => {
    if(categoryFilterArray.length>0){
      dispatch(clearCategory());
      console.log(categoryFilterArray);
    }
    dispatch(addCategory(text))
    // console.log(categoryFilterArray);
  }

  return (
    <>
    <Link to="/product-listing">
    <div className='card' onClick={()=>clickHander(props.text)}>
        <div className='card-img'>
            <img src={props.url ? props.url : placeholderImage} onError={onImageError} ></img>
        </div>
        <div className='card-text'>
            {props.text}
        </div>
    </div>
    </Link>
    </>
  )
}

export default CategoryCard;