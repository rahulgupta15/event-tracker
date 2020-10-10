const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const keySchema = new Schema({
  username: { type: String, required: true },
  key: { type: String, required: true },
}, {
  timestamps: true,
});

const Key = mongoose.model('Key', keySchema);

module.exports = Key;
