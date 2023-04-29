import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';
import styles from '../SearchHeader/SearchHeader.module.css';


export default function SearchHeader() {

  const router = useRouter();
  const [value, setValue] = useState('');
  
  const handleSubmit = (e,value) => {
    e.preventDefault();

    router.push(`/view/${value}`);
  }
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <header className={styles.header__name}>
      <form onSubmit={(e) => handleSubmit(e, value)} className={styles.header}>
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

