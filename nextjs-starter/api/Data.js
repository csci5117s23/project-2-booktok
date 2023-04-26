// api/Data.js
import axios from 'axios';

export function getData(longitude,latitude,value) {
  
  const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  const options = {
    method: 'GET',
    url: proxyUrl + 'https://api.yelp.com/v3/businesses/search',
    params: {
      latitude: `${latitude}`,
      longitude: `${longitude}`,
      term: `${value}`,
      sort_by: 'best_match',
      limit: '20'
    },
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'accept': 'application/json',
      'x-requested-with': 'xmlhttprequest',
      'Access-Control-Allow-Origin': '*'
    }
  };

  console.log(options);

  return axios.request(options);
}