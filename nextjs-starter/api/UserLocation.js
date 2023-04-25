import { useGeoLocation } from 'use-geo-location';

export default function UserLocation() {
  const apiKey = 'AIzaSyDNKN0nE-ePLUW9d9lbL9gjPci5S8nsXcI';
  const { latitude, 
          longitude, 
          loading,  
          googleMapsResults } = useGeoLocation({ apiKey }); // apiKey is optional
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

