// api/Data.js
import axios from 'axios';

export async function getData(longitude,latitude,id) {
  
  const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  const options = {
    method: 'GET',
    url: proxyUrl+'https://api.yelp.com/v3/businesses/search',
    params: {
      latitude: `${latitude}`,
      longitude: `${longitude}`,
      term: `${id}`,
      sort_by: 'best_match',
      limit: '16'
    },
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'accept': 'application/json',
      'x-requested-with': 'xmlhttprequest',
      'Access-Control-Allow-Origin': '*',
     
    }
  };

  return axios.request(options);
}