import './AccountCard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const AccountCard = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.email);
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          const fetchedUserData = docSnapshot.data();
          setUserData(fetchedUserData);
          console.log('User Data:', fetchedUserData);
        }
      }
    };

    fetchUserData();
  }, [user]); 

  if (user) {
    const fullName = userData ? `${userData.first} ${userData.last}` : '';
    const username = userData ? userData.username : '';
    return (
      <div className='acc-card'>
        <div className='acc-card-upper'>
          <div className='acc-card-upper-img'>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt='Profile' className='img1' />
            <img src='https://www.freeiconspng.com/thumbs/edit-icon-png/edit-icon-png-24.png' alt='Edit' className='img2' />
          </div>
        </div>
        <br/>

        <div className='acc-card-lower'>
        <div className='acc-card-lower-name'>
            <h3>@{username}</h3>
          </div>
          <div className='acc-card-lower-name'>
            <h3>{fullName}</h3>
          </div>
          <div className='acc-card-lower-email'>
            <h3>{user.email}</h3>
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default AccountCard;
