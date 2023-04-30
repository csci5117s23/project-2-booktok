import { useRouter } from 'next/router';
import homeStyles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';
import Restaurant from '../../components/Restaurant/Restaurant';
import styles from '../view/id.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  const { latitude, longitude } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const [Restaurants, setRestaurant] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  async function dataFetch() {
    if (latitude && longitude) {
  
      getData(longitude, latitude, id)
        .then(function (response) {
          console.log(response);
          setRestaurant(response.data.businesses);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    dataFetch();
  }, [longitude, latitude]);

  if (loading) {
    console.log(loading);
    return <span className={homeStyles.loading}> 
    Loading your search... &nbsp;
    <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
    </span>;
} 

  return (
    <ul className={styles.restaurants}>
      {Restaurants.map((data) => (
        <Restaurant key={data.id} data={data}/>
    ))}
    </ul>
  )
};

export default Post;