import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';
import Restaurant from '../../../components/Restaurant/Restaurant';

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
  }, [latitude,longitude]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {Restaurants.map((data) => (
        <Restaurant key={data.id} data={data}/>
    ))}
    </ul>
  )
};

export default Post;