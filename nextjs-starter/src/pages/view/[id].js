import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';

const Post = () => {
  const { latitude, longitude } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  function dataFetch() {
    if (latitude && longitude) {
      getData(longitude, latitude, id)
        .then(function (response) {
          console.log(response);
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

  return <p>post: {id}</p>;
};

export default Post;