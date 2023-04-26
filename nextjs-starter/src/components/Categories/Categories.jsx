import styles from './Categories.module.css';
import Link from 'next/link';

export default function Categories({ categories}) {

  return (
    <ul className={styles.restaurants}>
      {categories.map((value, index) => (
        <Link key={index} href={`/view/${value}`}>
          <li className={styles.list}>
            {value}
          </li>
        </Link>
      ))}
    </ul>
  );
}