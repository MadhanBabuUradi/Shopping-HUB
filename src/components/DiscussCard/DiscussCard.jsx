/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './DiscussCard.css';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const DiscussCard = (props) => {
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
    <div className="discuss-card">
      <div className="discuss-card-img">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
      </div>
      <div className="discuss-card-info">
        <div className='discuss-info'>
          <h4>{props.username}</h4>
        </div>
        <div className='actual-discuss'>{props.info}</div>
        <div className='discuss-like'>
          <i className='pi pi-heart'></i>
        </div>
      </div>
    </div>
  )
}
export default DiscussCard;