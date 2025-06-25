import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import ZoomControl from 'ol/control/Zoom';
import { Box } from '@mui/material';
import 'ol/ol.css';

interface Location {
  latitude: number;
  longitude: number;
  zoom?: number;
}

interface MapComponentProps {
  location: Location;
}

const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([
            location.longitude ?? 0,
            location.latitude ?? 0,
          ]),
          zoom: location.zoom ?? 17,
        }),
        controls: [new ZoomControl()],
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, [location]);

  return (
    <Box
      ref={mapRef}
      sx={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    />
  );
};

export default MapComponent;