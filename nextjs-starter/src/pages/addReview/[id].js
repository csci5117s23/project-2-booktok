import ReviewForm from '../../components/Review/SearchReview';
import WishForm from '../../components/Wishlist/SearchWish';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons';


export default function ReviewPage() { 
  
  const router = useRouter();
  const { id } = router.query;
  const [name, address] = id.split('::');
  
  return (
    <>
      <div className='columns'>
      <section class="hero is-white is-small">
        <div class="hero-body">
          <p class="title">{name}</p>
          <p class="subtitle">{address}</p>
        </div>
      </section>
  
      {/* Review form */}
      <div className='column has-background-link-light is-one-third'>
        <section class="hero is-link-light is-small">
          <div class="hero-body">
            <p class="title has-text-link-dark">
              Review<span>&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faUtensils} beat style={{color: "#3850b7",}} />
            </p>
          </div>
        </section>
        <br></br>
        <div className='pb-5'>
          <ReviewForm info={[name, address]}></ReviewForm>
        </div>
      </div>

      {/* Wishlist form */}
      <div className='column has-background-warning-light is-one-third'>
        <section class="hero is-warning-light is-small">
          <div class="hero-body">
            <p class="title has-text-warning-dark">
              Wish list<span>&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faHeart} bounce style={{color: "#ffc038",}} />
            </p>
          </div>
        </section>
        <br></br>
        <div className='pb-5'>
          <WishForm info={[name, address]}></WishForm>
        </div>
      </div>
    </div>
    </>
  );  
}