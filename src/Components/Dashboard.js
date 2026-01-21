import "../Styles/Dashboard.css";
import Val_com from "./Val_com";
import { useEffect, useState } from "react";
import SensorInfo from "./SensorInfo";

const Dashboard = (props) => {
  const [values, setValues] = useState({
    N: 0,
    P: 0,
    K: 0,
    Moisture: 0,
    Temp: 0,
    Humidity: 0,
    Battery: 0,
  });

  const [lastUpdate, setLastUpdate] = useState("0000-00-00T00:00:00Z");
  const [entryID, setEntryID] = useState(0);
  useEffect(() => {
    const fetchThingSpeakData = async () => {
      try {
        const response = await fetch(
          `https://api.thingspeak.com/channels/${props.sensorChannelId}/feeds/last.json?results=1`
        );

        if (!response.ok) {
          throw new Error("ThingSpeak connection failed");
        }

        const data = await response.json();
        console.log("Fetched ThingSpeak data:", data);
        setLastUpdate(data.created_at);
        setEntryID(data.entry_id);
        setValues({
          N: Number(data.field1) || 0,
          P: Number(data.field2) || 0,
          K: Number(data.field3) || 0,
          Moisture: Number(data.field4) || 0,
          Temp: Number(data.field5) || 0,
          Humidity: Number(data.field6) || 0,
          Battery: Number(data.field7) || 0,
        });

      } catch (error) {
        console.error("Error fetching ThingSpeak data:", error);
      }
    };

    fetchThingSpeakData();

    const interval = setInterval(fetchThingSpeakData, (60 * 60 * 1000));
    return () => clearInterval(interval);

  }, []);
  return (
  
    <div className="dashboard">
      <div className="title">
        <p className="title_txt">Dashboard</p>
        <p className="sensor_txt">{props.sensor}</p>
        <p className="sensor_update"></p>
        <div className="oct">
          <img
            className="octa"
            src={require("../Assets/Images/Octagon_Icon.png")}
            alt="OCTAGON"
          />
          <p className="octa_txt">Green Oasis</p>
        </div>
      </div>
      <SensorInfo
        lastupdate={lastUpdate}
        entryID={entryID}
      />
      <Val_com
        tag={[
          "Nitrogen",
          "Phosphorus",
          "Potassium",
          "Moisture",
          "Temperature",
          "Humidity",
        ]}
        keys={["N", "P", "K", "Moisture", "Temp", "Humidity"]}
        val={values}
        img={[
          "N",
          "P",
          "K",
          "Moisture_Icon",
          "Temp_Icon",
          "Humidity_Icon",
        ]}
        fan_state={false}
      />
    </div>
  );
};

export default Dashboard;

