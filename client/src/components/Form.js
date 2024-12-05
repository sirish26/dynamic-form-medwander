import React, { useState } from 'react';
import axios from 'axios';

function Form({ formType }) {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [countryCode, setCountryCode] = useState(localStorage.getItem('countryCode') || '');
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://potential-space-fishstick-q5qqg9r5qj7hxw46-5000.app.github.dev/api/forms', {
                formType,
                name,
                countryCode,
                phoneNumber,
            }, { withCredentials: true });
            localStorage.setItem('name', name);
            localStorage.setItem('countryCode', countryCode);
            localStorage.setItem('phoneNumber', phoneNumber);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formType}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
                <option value="US">US</option>
                <option value="IN">IN</option>
            </select>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
