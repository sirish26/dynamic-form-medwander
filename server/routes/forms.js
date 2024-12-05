const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).json(form);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
