const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formType: String,
  name: String,
  countryCode: String,
  phoneNumber: String,
});

module.exports = mongoose.model('Form', formSchema);
