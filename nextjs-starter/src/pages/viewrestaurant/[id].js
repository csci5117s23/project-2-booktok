import { useRouter } from 'next/router';
import homeStyles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
// import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';
import Restaurant from '../../components/Restaurant/Restaurant';
import styles from '../view/id.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
// import SideNavbar from '@/components/SideNavbar/SideNavbar';



export default function searchString() {
    const { latitude, longitude } = useGeoLocation();
    const [loading, setLoading] = useState(true);
    const [Restaurants, setRestaurant] = useState([]);

    const router = useRouter();
    const { id } = router.query;

    console.log("query: ", id);

    let service;
    let map;

    function initialize() {
        let currentLocation = new google.maps.LatLng(latitude,longitude);
    
        // map div was placed in app.js (only way we could get search results without using autocompletion)
        // we don't actually care about the map only the results given
        map = new google.maps.Map(document.getElementById('map'), {
            center: currentLocation,
            zoom: 15
        });
    
        let request = {
            placeId: id,
            fields: ["name", "formatted_address", "rating", "website", "geometry", "place_id"]
        };
        
        service = new google.maps.places.PlacesService(map);
        service.getDetails(request, callback);
    }
    
    // gives result of string searched
    function callback(results, status) {
        console.log("callback")
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            // for (let i = 0; i < results.length; i++) {
            //     console.log("#: ", i);
            //     console.log("results: ", results[i]);
            // }
            setRestaurant(results);
            setLoading(false);
        }
    }

    useEffect(() => {
        initialize();
    }, []);

    if (loading) {
        return <span className={homeStyles.loading}> 
        Loading your search... &nbsp;
        <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
        </span>;

    } 

    console.log("restaurant: ", Restaurants);
    return (
        <div className={styles.container}>  
          <ul className={styles.restaurants}>
            {/* {Restaurants.map((data) => ( */}
              <Restaurant key={Restaurants.place_id} data={Restaurants}/>
            {/* ))} */}
          </ul>
        </div>
    )
}