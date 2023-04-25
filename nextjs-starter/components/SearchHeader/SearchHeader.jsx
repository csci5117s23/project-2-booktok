import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import styles from './SearchHeader.module.css'
import Categories from '../Categories/Categories';
import { useRouter } from 'next/router'
import axios from 'axios';


export default function SearchHeader() {
  const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
  const router = useRouter();

  const [text, setText] = useState('');
  const [data, setData] = useState(null);
  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];

  const handleSubmit = (e) => {
    e.preventDefault();

    // const searchTerm = text.trim();
    // if (!searchTerm) {
    //   return;
    // }
    // const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}`;

    // axios.get(url, {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`
    //   }
    // })
    //   .then(response => {
    //     setData(response.data);
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

    

    // console.log(router);

    // router.push('/details/[category]')
    // router.push('/detail')

    // I gotta use below of the example after fetching the data from yelp.

    // router.push(
    //   // url
    //   {
    //     pathname: "/details/[id]",
    //     query: { id: movie.id, name: movie.name },
    //   },
    //   // as
    //   "/details/[id]"
    // );

  
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
      <Categories categories={categories}/>
    </>
  );
}

