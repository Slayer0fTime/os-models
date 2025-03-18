'use client';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function LocationMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
