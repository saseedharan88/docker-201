const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Epass = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  from: {type: String, required: true},
  destination: {type: String, required: true},
  travel: {type: String, required: true},
});

module.exports = mongoose.model('Epass', Epass)
