/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react';
import DiscussCard from '../../DiscussCard/DiscussCard'
import './ProductDisscussion.css'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/FirebaseConfig';

const ProductDisscussion = (props) => {
  var id = props.id;
  id = id.toString();
  console.log(id)

  const discussRef = useRef('');

  const username = localStorage.getItem('username');

  const changekHandler = (e) => {
    e.preventDefault();
    discussRef.current = e.target.value;
    console.log(discussRef.current);
  }

  const submitHandler = useCallback(async (e) => {
    e.preventDefault();
    console.log(discussRef.current);
    try {
      const productDocRef = doc(db, 'products', id);
      const docSnapshot = await getDoc(productDocRef);
      if (docSnapshot.exists()) {
        const productData = docSnapshot.data();
        const updatedDiscuss = productData.discuss || [];
        updatedDiscuss.unshift({username:username, discuss: discussRef.current });
        await updateDoc(productDocRef, {discuss: updatedDiscuss });
        setDiscuss((prevDiscuss) => [{username:username,discuss: discussRef.current },...prevDiscuss]);
        console.log('Discuss data added successfully.');
      } else {
        console.log('Product document does not exist.');
      }
    } catch (error) {
      console.error('Error adding discuss data:', error);
    }
  },[id,username])

  const [discuss, setDiscuss] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const productDocRef = doc(db, 'products', id);
      const docSnapshot = await getDoc(productDocRef);
      const productData = docSnapshot.data();
      setDiscuss(productData.discuss || []);
      console.log(productData);
    };

    fetchData();
  },[id,submitHandler])

  const makeId = ()=>{
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <div className='discussion'>
        <div className="discussion-upper">
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className='review-2'>
                  <textarea ref={discussRef} onChange={(e)=>changekHandler(e)} placeholder='discuss here...'></textarea>
                  <button type='submit' style={{cursor:'pointer'}}>Submit</button>
                </div>
            </form>
        </div>
        <div className="discussion-lower">
            {discuss.length>0 && discuss.map((item) => (
            <DiscussCard key={makeId()} info = {item.discuss} username = {item.username}  />
            ))}
            {
              discuss.length===0 && <h1>Be the first to discuss</h1>
            }
        </div>
    </div>
  )
}

export default ProductDisscussion