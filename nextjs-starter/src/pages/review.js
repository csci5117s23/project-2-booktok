import ReviewForm from '../components/Review/ReviewForm';
import WishForm from '../components/Wishlist/Wishlistform';
import styles from '@/styles/Home.module.css'


export default function ReviewPage() { 
  return (
    <div className='columns'>
        <div className='column'>
          <h1 className={styles.titleTimeline}>Add to Timeline</h1>
          <ReviewForm></ReviewForm>
        </div>
        <div className='column'>
          <h1 className={styles.titleTimeline}>Add to Wish List</h1>
            <WishForm></WishForm>
        </div>
    </div>
  );  
}