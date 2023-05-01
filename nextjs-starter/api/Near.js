import axios from 'axios'


export async function NearSearch(longitude, latitude) {
  // console.log(longitude); 
  // console.log(latitude);  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const url =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=}&location=${latitude}%2C${longitude}&radius=1500&type=restaurant&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;

  } catch (error) {
    console.error(error);
  }
}