import { useState } from "react";

export default function MyInput() {
  const [myInputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label>Your Name:</label>
      <input value={myInputValue} onChange={handleInputChange} />
      <p>Your input: {myInputValue}</p>
    </div>
  );
}