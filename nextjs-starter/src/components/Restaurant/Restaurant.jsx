import styles from '../Restaurant/Restaurant.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faUtensils, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function Restaurant({data}) {
  const {image_url, name, vicinity, phone, rating,photos} = data;

  // Fyi, There is no image_url name from the json
  // name : restaurant name
  // vicinity: location
  // rating: rating
  // The data I am trying to get is photos but it's kind of weird to get this(failed)

  return (
    <div className='box has-text-centered'>
      <section className='hero is-small'>
        <div className="hero-body">
          <p className="title">{name}</p>
          <p className="subtitle">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b"}} /><span>&nbsp;&nbsp;</span>
              {vicinity}
          </p>
        </div>
      </section>
      <img src={image_url} alt={name} className={styles.image} /><br/>
      
      <FontAwesomeIcon icon={faPhone} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {phone || "No phone number"} <br/>
      <FontAwesomeIcon icon={faStar} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                
      rating: {rating} / 5<br />
      

      <button className='button is-success is-light'>
        <Link key={location.address1} href={`/addReview/${name}::${location.address1}`}>
          Add place
        </Link>
      </button>
    </div>

  );
}

