import styles from '../Restaurant/Restaurant.module.css';
import {FcLike} from 'react-icons/fc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faUtensils, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function Restaurant({data}) {
  const {image_url, name,location,phone,rating} = data;
  
  return (
    // <li className={styles.lists}>
    <div className='box has-text-centered'>
      <section className='hero is-small'>
        <div className="hero-body">
          <p className="title">{name}</p>
          <p className="subtitle">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b"}} /><span>&nbsp;&nbsp;</span>
              {location.address1}
          </p>
        </div>
      </section>
      <img src={image_url} alt={name} className={styles.image} /><br/>
      
      <FontAwesomeIcon icon={faPhone} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {phone || "No phone number"} <br/>
      <FontAwesomeIcon icon={faStar} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                
      rating: {rating} / 5<br />

      {/* <button className="button"> click<FcLike /></button> */}
      <button className='button is-success is-light'>
        <Link key={location.address1} href={`/addReview/${location.address1}`}>
          add review
        </Link>
      </button>
      <button className='button is-success is-light'>
        <Link key={location.address1} href={`/addWish/${location.address1}`}>
          add wish
        </Link>
      </button>
    </div>

    
  );
}

