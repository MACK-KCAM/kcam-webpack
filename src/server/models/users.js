const Database = require('../dbConfigs');
const { Schema } = require('mongoose');

const { mongo: { model } } = Database;

const usersSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: false},
  authId: {type: String, required: false},
  firstName: String,
  lastName: String,
  images: {},
  favorites: [String]
});

module.exports = model('users', usersSchema, 'users'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
