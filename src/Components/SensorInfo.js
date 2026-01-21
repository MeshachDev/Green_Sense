import '../Styles/SensorInfo.css';

const SensorInfo = (props) => {

    const [date, time] = props.lastupdate.replace("Z", "").split("T");

    return (
        <div className='sensor-info-container'>
                <p><strong>Last Update On :</strong> {date} at {time}</p>
                <p><strong>Entry ID:</strong> {props.entryID}</p>
        </div>
    )
}

export default SensorInfo;