import { useRouter } from 'next/router';
import homeStyles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';
import Restaurant from '../../components/Restaurant/Restaurant';
import styles from '../view/id.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import SideNavbar from '@/components/SideNavbar/SideNavbar';
import Map from '@/components/Map/Map'

const Post = () => {
  const { latitude, longitude } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const [Restaurants, setRestaurant] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  function dataFetch() {
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
    return <span className={homeStyles.loading}> 
    Loading your search... &nbsp;
    <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
    </span>;

    // console.log("Restaurants check");
    // console.log(Restaurants.businesses);
  } 

  return (
    <div className={styles.container}>  
      <SideNavbar className={styles.SideNav}/>
      <ul className={styles.restaurants}>
        {Restaurants.map((data) => (
          <Restaurant key={data.id} data={data}/>
        ))}
      </ul>
      <Map latitude={latitude} 
           longitude={longitude} 
           Restaurants={Restaurants}/>
    </div>
  )
};

export default Post;