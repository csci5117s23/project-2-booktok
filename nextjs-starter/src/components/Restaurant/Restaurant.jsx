import styles from '../Restaurant/Restaurant.module.css';
import {FcLike} from 'react-icons/fc'

export default function Restaurant({data}) {
  const {image_url, name,location,phone,rating} = data;
         
  return (
    <li className={styles.lists}>
      <img src={image_url} alt={name} className={styles.image} /><br/>
               {name} <br/>
               {location.address1} <br />
               {phone || "No phone number"} <br/>
       rating: {rating} / 5<br />

      <button className={styles.button}>If you like click: <FcLike /></button>
    </li>
  );
}

