import {useState,useEffect} from 'react';
import { NearSearch } from '../../api/Near';
import { useGeoLocation } from 'use-geo-location';
import homeStyles from '@/styles/Home.module.css'
import styles from '../pages/view/id.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import Restaurant from '@/components/Restaurant/Restaurant';
import SideNavbar from '@/components/SideNavbar/SideNavbar';

export default function AroundYou() {

  // const { latitude, longitude } = useGeoLocation();
  // const [loading, setLoading] = useState(true);
  // const [NearRestaurants,setNearRestaurants] = useState([]);

  // async function NearFetch(){
  //   if(latitude && latitude){
  //     const data = await NearSearch(longitude,latitude)

  //     console.log(data);
  //     setNearRestaurants(data.results)
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   NearFetch();
  // }, [longitude, latitude]);

  // if (loading) {
  //   return <span className={homeStyles.loading}>
  //     Loading your search... &nbsp;
  //     <FontAwesomeIcon icon={faPersonRunning} bounce style={{ color: "#139a54", }} />
  //   </span>;
  // }

  // return (
  //   <div className={styles.container}>
  //     <SideNavbar className={styles.SideNav} />
  //     <ul className={styles.restaurants}>
  //       {NearRestaurants.map((data) => (
  //         <Restaurant key={data.place_id} data={data} />
  //       ))}
  //     </ul>
  //   </div>
  // );
}

