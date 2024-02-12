// FormComponent.jsx

import React, { useState } from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    country: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data, like submitting to a server
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <div className="radio-group">
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
          </label>
        </div>
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          I agree to the terms and conditions
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
