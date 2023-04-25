import styles from './Categories.module.css'

export default function Categories({ categories }) {

  return (
      <div className={styles.restaurants}>
        {categories.map((value,index)=>(
          <button 
            key = {index}
            className={styles.list}>
            {value}
          </button>
        ))}
      </div>
  );
}

