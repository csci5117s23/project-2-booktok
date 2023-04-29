import SearchHeader from '../components/SearchHeader/SearchHeader';
import Categories from '../components/Categories/Categories';
import styles from '@/styles/Home.module.css';

export default function Search() { 
  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];
  
  return (
    <div>
      {/* <SearchHeader/>
      <Categories categories={categories} /> */}
      <div className='columns is-centered'>
        <div className='column has-text-centered is-three-quarters'>
          <h2 className={styles.searchInstruction}>search restaurant to leave review or add to wish list</h2>
          <SearchHeader/>
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );  
}