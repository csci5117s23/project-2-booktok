import styles from '../Restaurant/Restaurant.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faUtensils, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function Restaurant({data}) {
  console.log("data: ", data);
  const {image_url, name, formatted_address, phone, rating, photos} = data;

  console.log("photos", photos);
  return (
    <div className='box has-text-centered'>
      <section className='hero is-small'>
        <div className="hero-body">
          <p className="title">{name}</p>
          <p className="subtitle">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b"}} /><span>&nbsp;&nbsp;</span>
              {formatted_address}
          </p>
        </div>
      </section>
      {/* <img src={image_url} alt={name} className={styles.image} /><br/> */}
      
      {/* <FontAwesomeIcon icon={faPhone} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {phone || "No phone number"} <br/> */}

      <FontAwesomeIcon icon={faStar} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      Rating: {rating} / 5<br />
      
      <br></br>
      <button className='button is-success is-light'>
        <Link key={formatted_address} href={`/addReview/${name}::${formatted_address}`}>
          Add place
        </Link>
      </button>
    </div>

  );
}

