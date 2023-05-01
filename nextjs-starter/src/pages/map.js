import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { useGeoLocation } from 'use-geo-location';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {

  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 44.9740,
      lng: -93.2277
    },
    zoom: 11
  });

  const { latitude, longitude } = useGeoLocation();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setDefaultProps({
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 11
      });
    }
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '60%' }}>
      {defaultProps.center.lat && defaultProps.center.lng && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
          />
          <FontAwesomeIcon icon={faPerson} 
                           bounce size="2xl" 
                           style={{ color: "#fc0303", }} />
        </GoogleMapReact>
      )}
    </div>
  );
}




