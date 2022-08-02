import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Maps from '../components/Maps';
import { useJsApiLoader } from '@react-google-maps/api';

function Main() {
  const center = {
    lat: -3.745,
    lng: -37.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: AIzaSyDWgNtjzuppoxBE - SOaDXuuKVd6arTyZrM,
  });

  return (
    <div>
      <div className="header-back">
        <Header />
        <Banner />
      </div>
      <Catalog />
      {isLoaded ? <Maps center={center} /> : ''}
    </div>
  );
}

export default Main;
