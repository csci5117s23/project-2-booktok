

export default function RestaurantsMarker({ Restaurants }) {
  // console.log(Restaurants[0]);
  // console.log(Restaurants[0].name);
  // console.log(Restaurants[0].coordinates.latitude);


  const defaultProps = {
    center: {
      lat: Restaurants[0].coordinates.latitude,
      lng: Restaurants[0].coordinates.longitude
    },
    zoom: 11
  };


  return (  
    <div>
      
    </div>
        // <AnyReactComponent
        //   lat={Restaurants[0].coordinates.latitude}
        //   lng={Restaurants[0].coordinates.longitude} />
       

  );
}