import { useState } from "react";

export default function MyForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Add phone field to the state
  });

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    // Perform additional actions here (e.g., send data to server)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Phone:
        <input
          type="tel" // Use "tel" type for phone numbers
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
}
