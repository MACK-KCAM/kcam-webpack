const Database = require('../dbConfigs');
const { Schema } = require('mongoose');

const { mongo: { model } } = Database;

const sampleControllerSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: false},
  tokenId: {type: String, required: false},
  ownerAddress: {type: String, required: false},
  contractAddress: String,
  image: String,
  title: String,
  description: String,
  attributes: [],
  userId: String,
  watched: Boolean,
});

module.exports = model('sampleController', sampleControllerSchema, 'watched'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
