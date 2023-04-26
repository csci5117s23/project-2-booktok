
export default function Restaurant({data}) {
  const {image_url, name,location,phone,rating} = data;
         
  return (
    <>
      <div>
        <img src={image_url} alt={name} />
      </div>
      <div>
      
      <strong> name: {name}</strong> <br />
        location : {location.address1},{location.city},{location.zip_code} <br />
        phone: {phone}  <br />
        rating: {rating} <br />
      </div>
    </>
  );
}

