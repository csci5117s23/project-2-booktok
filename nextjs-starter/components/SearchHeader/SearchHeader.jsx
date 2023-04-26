import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import styles from './SearchHeader.module.css'
import { useRouter } from 'next/router'
import { getData } from '../../api/Data';

export default function SearchHeader({latitude, longitude}) {

  const router = useRouter();
  const [value, setValue] = useState('');
  
  const handleSubmit = (e,value) => {
    e.preventDefault();

    getData(longitude, latitude,value)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={(e)=>handleSubmit(e,value)}>
        <input
          className={styles.search} 
          type="text"
          placeholder="Search..."
          onChange={handleChange}  
        />
        <button 
          className={styles.button_click}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

