// import { useRouter } from 'next/router';
// import homeStyles from '@/styles/Home.module.css'
// import { useEffect, useState } from 'react';
// import { getData } from '../../../api/search';
// import { useGeoLocation } from 'use-geo-location';
// import Restaurant from '../../components/Restaurant/Restaurant';
// import styles from '../view/id.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
// import SideNavbar from '@/components/SideNavbar/SideNavbar';


const Post = () => {
  // const { latitude, longitude } = useGeoLocation();
  // const [loading, setLoading] = useState(true);
  // const [Restaurants, setRestaurant] = useState([]);

  // const router = useRouter();
  // const { id } = router.query;

  // async function dataFetch(){
  //   if(latitude && longitude){
  //     const data = await getData(longitude, latitude, id);  
      
  //     console.log(data);

  //     setRestaurant(data.results)
  //     setLoading(false);
  //   }
  // }


  // useEffect(() => {
  //   dataFetch();
  // }, [longitude, latitude]);

  // if (loading) {
  //   return <span className={homeStyles.loading}> 
  //   Loading your search... &nbsp;
  //   <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
  //   </span>;

  // } 

  // return (
  //   <div className={styles.container}>  
  //     <SideNavbar className={styles.SideNav}/>
  //     <ul className={styles.restaurants}>
  //       {Restaurants.map((data) => (
  //         <Restaurant key={data.place_id} data={data}/>
  //       ))}
  //     </ul>
  //   </div>
  // )
};

export default Post;