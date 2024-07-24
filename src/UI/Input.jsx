/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Input.css';
import 'primeicons/primeicons.css';

const Input = (props) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    props.setSearchValue(inputValue);
  },[inputValue, props])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const name = props.name;
  const class1 = "search-bar-" + name.toString();

  return (
    <div className='input-field'>
      <input
        className={class1}
        placeholder="search product"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
