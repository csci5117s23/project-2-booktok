import axios from 'axios'

export async function getData(longitude, latitude, id) {

  console.log(longitude); //경도
  console.log(latitude);  //위도

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const url = 
  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${id}&location=${latitude}%2C${longitude}&radius=1500&type=restaurant&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
    
  } catch (error) {
    console.error(error);
  }
}