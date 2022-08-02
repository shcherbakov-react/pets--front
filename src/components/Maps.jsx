import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const Maps = () => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -37.523,
  };

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <></>
    </GoogleMap>
  );
};

export default Maps;
