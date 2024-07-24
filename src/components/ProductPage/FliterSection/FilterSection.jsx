/* eslint-disable no-undef */
import './FilterSection.css'
import { useSelector,useDispatch } from 'react-redux';
import { addCategory,removeCategory } from '../../../redux/categoryFilter.js'
import { addPrice } from '../../../redux/priceFilter.js'
import { addRating } from '../../../redux/ratingFilter';
const FilterSection = () => {

    const selectedPrice = useSelector((state)=>state.priceFilter.value);

    const dispatch = useDispatch();

    const priceClickHandler = (e) => {
        dispatch(addPrice(e.target.value)); 
    };

    const selectedRating = useSelector((state)=>state.ratingFilter.value);
    
    const ratingClickHandler = (e) => {
        dispatch(addRating(e.target.value))
        console.log(e.target.value);
    };

    const Categories = useSelector((state)=>state.productlist.value);
    const categoryFilterArray = useSelector((state)=>state.categoryFilter.value);

    const isCategoryChecked = (categoryName) => {
        return categoryFilterArray.includes(categoryName);
    };

    const clickHandler = (e) => {
        if(e.target.checked){
            dispatch(addCategory(e.target.value));
        }else{
            dispatch(removeCategory(e.target.value));
        }
    }
  return (
    <div className='filter-section'>
        <div className='filter-container'>
            <div className='filter-shower'>
                <div className='filter-shower-text'>Filters</div>
                <div className='filter-shower-clear'>Clear All</div>
            </div>
            <div className='category'>
                <h4>Category</h4>
                {Categories.map((category) => (
                    <div className='category-item' key={category.id}>
                        <input 
                            type='checkbox' 
                            id={category.id} 
                            name={category.name} 
                            value={category.name}
                            checked={isCategoryChecked(category.name)}
                            onChange={clickHandler}
                            />
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
                ))}
            </div>
            <div className='price'>
                <h4>Price</h4>
                <input
                    type='radio'
                    id='price1'
                    name='price'
                    value='100'
                    checked={selectedPrice === '100'}
                    onChange={priceClickHandler}
                />
                <label htmlFor='price1'>{' < '}100</label>
                <br/>
                <input
                    type='radio'
                    id='price1'
                    name='price'
                    value='200'
                    checked={selectedPrice === '200'}
                    onChange={priceClickHandler}
                />              
                <label htmlFor='price2'>{' < '}200</label>
                <br/>
                <input
                    type='radio'
                    id='price1'
                    name='price'
                    value='300'
                    checked={selectedPrice === '300'}
                    onChange={priceClickHandler}
                />
                <label htmlFor='price3'>{' < '}300</label>
                <br/>
                <input
                    type='radio'
                    id='price1'
                    name='price'
                    value='400'
                    checked={selectedPrice === '400'}
                    onChange={priceClickHandler}
                />
                <label htmlFor='price4'>{' < '}400</label>
                <br/>
                <input
                    type='radio'
                    id='price1'
                    name='price'
                    value='500'
                    checked={selectedPrice === '500'}
                    onChange={priceClickHandler}
                />
                <label htmlFor='price5'> ALL</label>
            </div>
            <div className='rating'>
                <h4>Rating</h4>
                <input
                    type='radio'
                    id='rating1'
                    name='rating'
                    value='less'
                    checked={selectedRating === 'less'}
                    onChange={ratingClickHandler}
                />
                <label htmlFor='rating1'>Less Rated</label>
                <br />
                <input
                    type='radio'
                    id='rating2'
                    name='rating'
                    value='average'
                    checked={selectedRating === 'average'}
                    onChange={ratingClickHandler}
                />
                <label htmlFor='rating2'>Average rated</label>
                <br />
                <input
                    type='radio'
                    id='rating3'
                    name='rating'
                    value='high'
                    checked={selectedRating === 'high'}
                    onChange={ratingClickHandler}
                />
                <label htmlFor='rating3'>Highly Rated</label>
                <br />
                <input
                    type='radio'
                    id='rating3'
                    name='rating'
                    value='all'
                    checked={selectedRating === 'all'}
                    onChange={ratingClickHandler}
                />
                <label htmlFor='rating3'>All</label>
            </div>
        </div>
    </div>
  )
}

export default FilterSection