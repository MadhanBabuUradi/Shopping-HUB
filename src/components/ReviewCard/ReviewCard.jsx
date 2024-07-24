/* eslint-disable react/prop-types */
import { doc, getDoc } from 'firebase/firestore';
import './ReviewCard.css'
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
const ReviewCard = (props) => {

  const [user, setUser] = useState(null);
  console.log(user);

  const [authUser] =  useAuthState(auth);
  useEffect(() => {
    if (authUser) {
      setUser(authUser);
    }
  }, [authUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {      
        if (authUser) {
          const userDocRef = doc(db, 'users', authUser.email); 
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUser({ ...authUser, ...userData }); 
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [authUser]);

  return (
    <div className="review-card">
        <div className="review-card-img">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
        </div>
        <div className="review-card-info">
            <div className='review-info'>
                <h4>{props.username}</h4>
                {Array.from({length: props.star}, (_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
            <div className='actual-review'>{props.review}</div>
        </div>
    </div>
  )
}

export default ReviewCard