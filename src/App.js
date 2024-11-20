import "./App.css";
import { useState } from "react";
let nextId = 6;
function App() {
  function handleAddClick() {
    if (deviceName.trim()) {
      // Ensure non-empty input
      setDevices([...devices, { id: nextId, name: deviceName }]); // Add the new device to the list
      nextId++;
      setDeviceName(""); // Clear the input after adding the device
    }
  }
  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id == id) {
        let newDevice = { ...device, name: device.name + "0" };
        return newDevice;
      } else {
        return device;
      }
    });
    setDevices(newDevices);
  }
  function handleDeleteClick(id) {
    const newDevices = devices.filter((device) => {
      return device.id !== id
    })
    // const newDevices = [...devices];

    // let index = 0;
    // let selectedIndex = 0;
    // for (let device of newDevices) {
    //   if (device.id == id) {
    //     selectedIndex = index;
    //   }
    //   index++;
    // }
    // newDevices.splice(selectedIndex, 1);
    // setDevices(newDevices);
  }
  const [deviceName, setDeviceName] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "mac" },
    { id: 3, name: "windows" },
    { id: 4, name: "xperia" },
    { id: 5, name: "samsung" },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleDeleteClick(device.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleEditClick(device.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });
  return (
    <div className="App">
      {devicesList}
      <div>
        <input
          value={deviceName}
          onChange={(event) => {
            setDeviceName(event.target.value);
          }}
          type="text"
        />
        <button onClick={handleAddClick}>+</button>
      </div>
    </div>
  );
}

export default App;
