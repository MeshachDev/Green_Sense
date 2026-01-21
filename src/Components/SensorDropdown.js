import '../Styles/SensorDropdown.css';
import sensors from '../Data/SensorsMappingData'

const SensorDropdown = (props) => {
    return (
        <div className='sensor-dropdown-container'>
            <select className='sensor-dropdown'
                value={sessionStorage.getItem("selectedSensorId") || sensors[0].channelId}
                onChange={(e) => {
                    props.onChange(e.target.value);
                    sessionStorage.setItem("selectedSensorId", e.target.value);
                    sessionStorage.setItem("selectedSensor", sensors.find(sensor => sensor.channelId === e.target.value).label);
                    window.location.reload();
                }}
            >
                {sensors.map(sensor => (
                    <option
                        key={sensor.channelId}
                        value={sensor.channelId}
                    >
                        {sensor.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SensorDropdown