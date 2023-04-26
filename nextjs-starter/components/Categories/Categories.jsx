import styles from './Categories.module.css';
import { getData } from '../../api/Data';

export default function Categories({ categories }) {

  const handleClick = () => {
    getData()
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <ul className={styles.restaurants}>
      {categories.map((value, index) => (
        <li
          key={index}
          className={styles.list}
          onClick={handleClick}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}