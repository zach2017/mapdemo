
import './App.css'
import MapContainer from './MapContainer';

const App: React.FC = () => {
  const location = {
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13,
  };

  return (
    <div>
      <MapContainer location={location} />
    </div>
  );
};

export default App
