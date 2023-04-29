import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';
import styles from '../SearchHeader/SearchHeader.module.css';


export default function SearchHeader() {

  const router = useRouter();
  const [value, setValue] = useState('');
  
  const handleSubmit = (e,value) => {
    e.preventDefault();

    router.push(`/view/${value}`);
  }
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <header>
      <form onSubmit={(e) => handleSubmit(e, value)}>
        <div className='field has-addons'>
          <div className='control'>
            <input
              className="input is-success is-medium"
              type="text"
              placeholder="Search..."
              onChange={handleChange}  
            />
          </div>
          <div className='control'>
            <button className="button is-success is-medium">
              <BsSearch />
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

