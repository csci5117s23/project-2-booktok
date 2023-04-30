import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props) {

  const {latitude,longitude,Restaurants} = props
  
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}

      >
        <AnyReactComponent
          lat={props.latitude}
          lng={props.longitude}
        />
        <FontAwesomeIcon icon={faPerson} bounce size="2xl" style={{ color: "#fc0303", }} />
      </GoogleMapReact>
    </div>
  );
}

