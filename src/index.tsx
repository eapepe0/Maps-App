/* eslint import/no-webpack-loader-syntax : off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
//@ts-ignore
import mapboxgl from '!mapbox-gl'; 
 
const mapboxAccessToken = process.env.REACT_APP_ACCESS_TOKEN;
(mapboxgl as any).accessToken = mapboxAccessToken;


if (!navigator.geolocation) {
  alert('Tu navegador no soporta la opcion de Geolocacion');
  throw new Error ('Tu navegador no tiene la opcion de Geolocation');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);