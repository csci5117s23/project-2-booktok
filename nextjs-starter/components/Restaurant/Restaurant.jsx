
export default function Restaurant({data}) {
  const {image_url, 
         name, 
         is_closed,  
         location,
         phone,
         rating,
         review_count} = data;
         
  return (
    <>
      <div>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <strong> name: {name}</strong> <br />
  
        {is_closed &&<p>Open</p> } close <br />
        location : {location.address1},{location.city},{location.zip_code} <br />
        phone: {phone}  <br />
        rating: {rating} <br />
        review_count : {review_count}
      </div>
    </>
  );
}

