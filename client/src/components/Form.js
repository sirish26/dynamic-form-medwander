import React, { useState } from 'react';
import axios from 'axios';

function Form({ formType }) {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [countryCode, setCountryCode] = useState(localStorage.getItem('countryCode') || '');
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !countryCode || !phoneNumber) {
            console.error('All fields are required.');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:5000/api/forms',
                {
                    formType,
                    name,
                    countryCode,
                    phoneNumber,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            localStorage.setItem('name', name);
            localStorage.setItem('countryCode', countryCode);
            localStorage.setItem('phoneNumber', phoneNumber);
            console.log("Form submitted successfully", response.data);
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">{formType}</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="form-input"
            />
            <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
                className="form-select"
            >
                <option value="" disabled>Select Country</option>
                <option value="US">US (+1)</option>
                <option value="IN">India (+91)</option>
                <option value="UK">UK (+44)</option>
                <option value="AU">Australia (+61)</option>
                <option value="CA">Canada (+1)</option>
                <option value="NZ">New Zealand (+64)</option>
                <option value="SG">Singapore (+65)</option>
                <option value="DE">Germany (+49)</option>
                <option value="FR">France (+33)</option>
                <option value="JP">Japan (+81)</option>
                <option value="BR">Brazil (+55)</option>
                <option value="ZA">South Africa (+27)</option>
            </select>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone"
                required
                className="form-input"
            />
            <button type="submit" className="form-button">Submit</button>
        </form>
    );
}

export default Form;
