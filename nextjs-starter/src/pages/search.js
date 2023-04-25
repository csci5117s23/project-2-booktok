import SearchHeader from '../../components/SearchHeader/SearchHeader';
import  UserLocation  from '../../api/userLocation'; 

export default function Search() { 
  return (
    <div>
      <SearchHeader />
      <UserLocation />
    </div>
  );  
}