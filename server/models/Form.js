const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formType: { type: String, required: true },
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);
