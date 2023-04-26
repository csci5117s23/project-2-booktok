import { BsSearch } from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router'

export default function SearchHeader() {

  const router = useRouter();
  const [value, setValue] = useState('');
  
  const handleSubmit = (e,value) => {
    e.preventDefault();

    router.push(`/view/${value}`);
  }
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <header className='is-flex-mobile-touch'>
      <form onSubmit={(e) => handleSubmit(e, value)} className='is-flex is-justify-content-center'>
        <input
          className='input is-primary is-medium is-rounded '
          type="text"
          placeholder="Search..."
          onChange={handleChange}  
        />
        <button className="button is-small is-success">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

