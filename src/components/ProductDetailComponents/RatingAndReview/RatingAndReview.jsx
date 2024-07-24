/* eslint-disable react/prop-types */
import './RatingAndReview.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/FirebaseConfig';
const RatingAndReview = (props) => {

    const reviewInfoRef = useRef('');
    const onChangeHandler = (e) => {
      reviewInfoRef.current = e.target.value;
    }

    var id = props.id;
    id = id.toString();
    console.log(id)
    const [value, setValue] = useState(1);

    const username = localStorage.getItem('username');

    const submitHandler = useCallback(async (e) => {
      e.preventDefault();
      console.log(reviewInfoRef.current);
      try {
        const productDocRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(productDocRef);
        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          const updatedRating = productData.rating || [];
          updatedRating.unshift({ star: value, review: reviewInfoRef.current ,username:username });
          await updateDoc(productDocRef, { rating: updatedRating });
          setRating((prevRating) => [{username:username, star: value, review: reviewInfoRef.current },...prevRating]);
          console.log('Review data added successfully.');
        } else {
          console.log('Product document does not exist.');
        }
      } catch (error) {
        console.error('Error adding review data:', error);
      }
    },[id, value, username])
  
    const [rating, setRating] = useState([]);
  
    useEffect(()=>{
      const fetchData = async () => {
        const productDocRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(productDocRef);
        const productData = docSnapshot.data();
        setRating(productData.rating || []);
        console.log(productData);
      };
      
      fetchData();
    },[id,submitHandler])
  
    const makeId = ()=>{
      return Math.random().toString(36).substr(2, 9);
    }

  return (
    <div className='rate-and-review'>
        <div className="rate-and-review-upper">
            <form>
                <div className='rate'>
                    <label>Rate this product</label>
                    <Box sx={{'& > legend': { mt: 2 },}}>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                      />
                    </Box> 
                </div>
                <div className='review'>
                  <textarea ref={reviewInfoRef} onChange={(e)=>onChangeHandler(e)}  placeholder='Write your review here...'></textarea>
                  <button onClick={submitHandler} style={{cursor:'pointer'}}>Submit</button>
                </div>
            </form>
        </div>
        <div className="rate-and-review-lower">
            {rating.length>0 && rating.map((item) => (
            <ReviewCard key={makeId} star = {item.star} review = {item.review} username={item.username} />
            ))}
            {rating.length===0 && <h3>No reviews yet</h3>}
        </div>
    </div>
  )
}
export default RatingAndReview