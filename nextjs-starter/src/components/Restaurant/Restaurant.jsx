import styles from '../Restaurant/Restaurant.module.css';
import {FcLike} from 'react-icons/fc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faUtensils, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Restaurant({data}) {
  const {image_url, name,location,phone,rating} = data;
         
  return (
    // <li className={styles.lists}>
    <div className='box has-text-centered'>
      <section class="hero is-small">
        <div class="hero-body">
          <p class="title">{name}</p>
          <p class="subtitle">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
              {location.address1}
          </p>
        </div>
      </section>
      <img src={image_url} alt={name} className={styles.image} /><br/>
      
      <FontAwesomeIcon icon={faPhone} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {phone || "No phone number"} <br/>
      <FontAwesomeIcon icon={faStar} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                
      rating: {rating} / 5<br />

      <button className="button"> click<FcLike /></button>
    </div>

    
  );
}

