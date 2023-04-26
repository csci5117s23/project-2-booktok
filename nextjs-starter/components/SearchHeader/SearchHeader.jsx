import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import styles from './SearchHeader.module.css'
import { useRouter } from 'next/router'



export default function SearchHeader() {
  const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
  const router = useRouter();

  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleChange = (e) => setText(e.target.value);
  
  return (
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
  );
}

