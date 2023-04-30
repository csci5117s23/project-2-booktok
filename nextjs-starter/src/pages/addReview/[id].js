import ReviewForm from '../../components/Review/ReviewForm';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


import { getData } from '../../../api/Data';


export default function ReviewPage() { 
  
  const router = useRouter();
  const { id } = router.query;
  const [restaurant, setRestaurant] = useState({});

  
  return (
    <>
    {console.log(restaurant)}
    <div className='columns'>
        <div className='column'>
          <h1>aaa review</h1>
          {/* <h1>Add Review for {data.name} - {restaurant.location?.address1}</h1> */}
          {/* {Restaurants.map((data) => (
          <Restaurant key={data.id} data={data}/>
        ))} */}
      
        </div>
        <div className='column'>
            <ReviewForm></ReviewForm>
        </div>
    </div>
    </>
  );  
}