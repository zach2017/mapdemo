
import './App.css'
import type { PointData } from './MapComponent';
import MapContainer from './MapContainer';

const App: React.FC = () => {
  const location = {
    latitude: 32.3800,
    longitude: -86.3100,
    zoom: 13,
  };

  const examplePoints : PointData[] = [
    { latitude: 32.3792, longitude: -86.3077, iconSize: 64 },
    { latitude: 32.3800, longitude: -86.3100, iconSize: 32 },
    { latitude: 32.3810, longitude: -86.3120, iconSize: 16 },
  ];

  return (
    <div>
      <MapContainer location={location} points={examplePoints} />
    </div>
  );
};

export default App
