import { useState } from "react";

export default function MyForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    termsAccepted: false, // Add a checkbox field to the state
    gender: "", // Add gender field for the select input
  });

  // Handle input changes
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setFormData(function (prevData) {
      return {
        ...prevData,
        [name]: value, // Update the specific field dynamically
      };
    });
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
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <hr />
      <label>
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted} // Controlled by the state
          onChange={handleChange} // Updates state on change
        />
        I accept the terms and conditions
      </label>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
}
