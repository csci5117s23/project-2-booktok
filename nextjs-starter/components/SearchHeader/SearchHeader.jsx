import Link from 'next/link';
import { BsSearch, BsYelp } from 'react-icons/bs';
import {useState} from 'react';
import styles from './SearchHeader.module.css'
import Restaurants from '../Restaurants/Categories';

export default function SearchHeader() {
  
  const [text,setText] = useState('');
  const categories = 
  ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai','Pizza'];
  
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  const handleChange = (e) => setText(e.target.value);
  
  return (
    <>
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.search} 
          type="text"
          placeholder="Search..."
          onChange={handleChange}  
        />
        <button className={styles.button_click}>
          <BsSearch />
        </button>
      </form>
    </header>
      <Restaurants categories={categories}/>
    </>
  );
}

