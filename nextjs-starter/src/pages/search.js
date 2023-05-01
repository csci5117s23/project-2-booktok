import SearchHeader from '../components/SearchHeader/SearchHeader';
import Categories from '../components/Categories/Categories';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Search() { 
  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];
  
  return (
    <div>
      <div className='columns is-centered'>
        <div className='column has-text-centered is-three-quarters'>
          <h2 className={styles.searchInstruction}>search restaurant to leave review or add to wish list</h2>
          <SearchHeader/>
          <br></br>
          <button className='button is-success-light has-text-success-dark is-light'>
            <Link href="/review">
            click me to add review or wish list without search
            </Link>
          </button>
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );  
}