import SearchHeader from '../../components/SearchHeader/SearchHeader';
import Categories from '../../components/Categories/Categories';
import { useGeoLocation } from 'use-geo-location';

export default function Search() { 
  const { latitude, longitude} = useGeoLocation(); 
  const categories = ['Burgers', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Pizza'];
  
  return (
    <div>
      <SearchHeader/>
      <Categories categories={categories} />
    </div>
  );  
}