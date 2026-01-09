import "../Styles/Dashboard.css";
import Val_com from "./Val_com";
import { useEffect, useState } from "react";

const chnl = "3027936";

const Dashboard = () => {
  const [values, setValues] = useState({
    N: 0,
    P: 0,
    K: 0,
    Moisture: 0,
    Temp: 0,
    Humidity: 0,
    Battery: 0,
  });

  useEffect(() => {
    const fetchThingSpeakData = async () => {
      try {
        const response = await fetch(
          `https://api.thingspeak.com/channels/${chnl}/feeds/last.json`
        );

        if (!response.ok) {
          throw new Error("ThingSpeak connection failed");
        }

        const data = await response.json();

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

        <div className="oct">
          <img
            className="octa"
            src={require("../Assets/Images/Octagon_Icon.png")}
            alt="OCTAGON"
          />
          <p className="octa_txt">Green Oasis</p>
        </div>
      </div>

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

