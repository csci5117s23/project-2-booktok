import styles from '../Restaurant/Restaurant.module.css';
import {FcLike} from 'react-icons/fc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPhone, faUtensils, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Restaurant({data}) {
  const {image_url, name,location,phone,rating} = data;
         
  return (
    // <li className={styles.lists}>
    <div className='box has-text-centered'>
      <img src={image_url} alt={name} className={styles.image} /><br/>
      <FontAwesomeIcon icon={faUtensils} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {name} <br/>
      <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {location.address1} <br />
      <FontAwesomeIcon icon={faPhone} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
      {phone || "No phone number"} <br/>
       rating: {rating} / 5<br />

      <button className={styles.button}> click<FcLike /></button>
      </div>
  );
}

