import { useGeoLocation } from 'use-geo-location';

export default function UserLocation() {
  
  const {latitude,longitude,loading} = useGeoLocation(); 
  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <span>latitude: {latitude}</span>
          <br />
          <span>longitude: {longitude}</span>
        </div>
      )}
    </>
  );
}

