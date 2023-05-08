import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY29sb3NpbiIsImEiOiJjbGhlZ2IxcDcwbnB5M2VyNDM5Mm9sNnd3In0.gyXmaoiedRrHeG88ReH3Xg';

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