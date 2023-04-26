import React from "react";
import GoogleMapReact from 'google-map-react';

const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 44.9740,
      lng: -93.2277
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

        // center={this.state.center}
        // onChildMouseEnter={this.onChildMouseEnter}
        // onChildMouseLeave={this.onChildMouseLeave}
      >
        <AnyReactComponent
          lat={44.9740}
          lng={-93.2277}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}