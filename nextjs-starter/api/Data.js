import axios from 'axios'

export async function getData(longitude, latitude, id) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const url = 
  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${id}&location=${latitude},${longitude}&radius=5000&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
    
  } catch (error) {
    console.error(error);
  }
}