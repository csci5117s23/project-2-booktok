import SearchHeader from '../../components/SearchHeader/SearchHeader';
import UserLocation  from '../../api/userLocation'; 
import Categories from '../../components/Categories/Categories';

export default function Search() { 

  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];

  return (
    <div>
      <SearchHeader />
      <Categories categories={categories} />

      <UserLocation />
    </div>
  );  
}