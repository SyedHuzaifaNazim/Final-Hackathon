import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    doverNumber: '',
    jobNumber: '',
    elevatorClass: '',
    capacity: '',
    upSpeed: '',
    downSpeed: '',
    motorHP: '',
    landings: '',
    fopenings: '',
    ropenings: '',
    plungerDiameter: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailBody = `
        Dover Number: ${formData.doverNumber}
        Job Number: ${formData.jobNumber}
        Elevator Class: ${formData.elevatorClass}
        Capacity: ${formData.capacity}
        Up Speed: ${formData.upSpeed}
        Down Speed: ${formData.downSpeed}
        Motor HP: ${formData.motorHP}
        Landings: ${formData.landings}
        Front Openings: ${formData.fopenings}
        Rear Openings: ${formData.ropenings}
        Plunger Diameter: ${formData.plungerDiameter}
        Notes: ${formData.notes}
      `;

      await axios.post('http://localhost:5000/api/send-email', {
        email: 'recipient@example.com', // Replace with recipient's email
        subject: 'Survey Form Submission',
        body: emailBody,
      });

      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-3x3">
      <h2 className="text-2xl font-large font-bold mb-4">Records Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="doverNumber" className="block text-gray-700 font-medium mb-2">
            Existing Dover Job Number
          </label>
          <input
            type="text"
            id="doverNumber"
            name="doverNumber"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            value={formData.doverNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700 font-medium mb-2">
            CNIC
          </label>
          <input
            type="number"
            id="doverNumber"
            name="doverNumber"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        {/* Add similar input fields for all other data */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
