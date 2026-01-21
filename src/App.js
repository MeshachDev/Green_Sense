import './Styles/App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Drawer from './Components/Drawer';
import { useState } from 'react';
import sensors from './Data/SensorsMappingData';

function App() {
  // sessionStorage.setItem("selectedSensorId", sensors[0].channelId);
  // sessionStorage.setItem("selectedSensor", sensors[0].label);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState(sessionStorage.getItem("selectedSensor") || sensors[0].label);
  const [sensorChannelId, setSensorChannelId] = useState(sessionStorage.getItem("selectedSensorId") || sensors[0].channelId);
  console.log("Selected Sensor:", selectedSensor);

  return (
    <div className='body'>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Header title={["Green Sense"]} onMenuClick={() => setDrawerOpen(true)} />
      <Dashboard sensor = {selectedSensor} sensorChannelId = {sensorChannelId} />
    </div>
  );
}

export default App;
