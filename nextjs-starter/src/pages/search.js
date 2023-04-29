import SearchHeader from '../components/SearchHeader/SearchHeader';
import Categories from '../components/Categories/Categories';

export default function Search() { 
  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];
  
  return (
    <div>
      <h2>search restaurant to leave review or add to wish list</h2>
      <h2>^^^ grammar/expression check plz</h2>
      <SearchHeader/>
      
      <Categories categories={categories} />
      {/* <div className='tile is-ancestor'>
        <div className='tile'>
          <SearchHeader/>
        </div>
        <div className='tile'>
          <Categories categories={categories} />
        </div>
      </div> */}
    </div>
  );  
}