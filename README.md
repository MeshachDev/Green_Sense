# 🌱 Green Sense – IoT-Based Precision Agriculture Dashboard

![Dashboard Screenshot](docs/dashboard.png)

---

## ✨ Features

- 📊 **Live sensor monitoring** – Nitrogen (N), Phosphorus (P), Potassium (K), soil moisture, temperature, and humidity
- 🔋 **Device health** – battery voltage of the sensor node
- 🌀 **Actuator status** – exhaust fan ON/OFF state
- 🕒 **Time display** – current date, IST, and UTC clocks
- 🔄 **Last update info** – timestamp (UTC & IST) and Entry ID of the latest ThingSpeak record
- 📡 **Multi-sensor support** – switch between sensor nodes (e.g. *Sensor 2*) from the dashboard
- 🎨 Clean, card-based green UI

---

## 📟 Data Fields

| Dashboard Card | ThingSpeak Field | Unit / Notes |
|----------------|------------------|--------------|
| Nitrogen (N)   | `field1`         | mg/kg |
| Phosphorus (P) | `field2`         | mg/kg |
| Potassium (K)  | `field3`         | mg/kg |
| Moisture       | `field4`         | % |
| Temperature    | `field5`         | °C |
| Humidity       | `field6`         | % |
| Battery        | `field7`         | Volts |
| Exhaust Fan    | `field8`         | `0` = OFF, `1` = ON |
