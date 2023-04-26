import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from '../../../api/Data';
import { useGeoLocation } from 'use-geo-location';
import Item from '../../../components/Item/Item';

const Post = () => {
  const { latitude, longitude } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});

  const router = useRouter();
  const { id } = router.query;

  function dataFetch() {
    if (latitude && longitude) {
  
      getData(longitude, latitude, id)
        .then(function (response) {
          console.log(response);
          setItem(response.data.businesses);

          console.log("test");
          console.log(item);

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
      {item.map((data) => (
        <Item key={data.id} data={data}/>
    ))}
    </ul>
  )
};

export default Post;