import  { useState } from 'react';
import './FeedbackForm.css';
import { doc, setDoc} from 'firebase/firestore';
import { db, } from '../../FirebaseConfig/FirebaseConfig';
import { toast } from 'react-hot-toast';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const makeId = ()=>{
    return Math.random().toString(36).substr(2, 9);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = doc(db, 'feedback', makeId());
    const feedbackDataObject = {
      name,
      email,
      feedback,
    }
    await setDoc(feedbackData, feedbackDataObject);
    console.log('Feedback submitted:', { name, email, feedback });
    setName('');
    setEmail('');
    setFeedback('');
    toast.success("Feedback submitted successfully!")
  };

  return (
    <div style={{marginTop:'2rem'}}>
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
