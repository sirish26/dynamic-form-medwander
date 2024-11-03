// routes/forms.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form'); // Import Form model

// POST route to create a new form entry
router.post('/', async (req, res) => {
    try {
        const form = new Form(req.body); // Create a new form document from request body
        await form.save(); // Save the form document to the database
        res.status(201).json({ message: "Form submitted successfully", form }); // Return success response
    } catch (error) {
        console.error("Error saving form:", error);
        res.status(400).json({ error: error.message });
    }
});

// GET route to fetch all form entries
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find(); // Fetch all form documents from the database
        res.status(200).json(forms); // Return fetched documents
    } catch (error) {
        console.error("Error retrieving forms:", error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
