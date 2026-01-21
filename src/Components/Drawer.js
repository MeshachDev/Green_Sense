import '../Styles/Drawer.css'
import { useState , useEffect} from 'react'
import SensorDropdown from './SensorDropdown'
import sensors from '../Data/SensorsMappingData'

const Drawer = (props) => {

    const [selectedSensor, setSelectedSensor] = useState(sensors[0]);
    
    if (!props.isOpen) return null;
    
    return (
        <div className='drawer-main'>
            <div className='drawer-menu'>
                <div className='drawer-top-bar'>
                    <h1 className='drawer-title'>Menu</h1>
                    <button className='drawer-close-btn' onClick={() => props.onClose()}>X</button>
                </div>
                <div className='drawer-content'>
                    <div className='drawer-select-sensor'>
                        <p className='select-sensor-txt'> Select Sensor : </p>
                        <div className='sensor-options'></div>
                        <SensorDropdown
                            value={selectedSensor}
                            onChange={setSelectedSensor}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Drawer