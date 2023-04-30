import WishForm from '../components/Wishlist/wishform';
import WishList from '../components/Wishlist/wishlist';

export default function WishListPage() { 
  return (
    <div className='columns'>
        <div className='column'>
            <WishForm></WishForm>
        </div>
        <div className='column'>
            <WishList></WishList>
        </div>
    </div>
  );  
}