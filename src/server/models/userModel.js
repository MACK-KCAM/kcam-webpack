const Database = require('../dbConfigs');
const { Schema } = require('mongoose');

const { mongo: { model } } = Database;

const usersSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: false},
  authId: {type: String, required: false},
  firstName: String,
  lastName: String,
  images: Schema.Types.Mixed,
  favorites: [[]],
  currentAlbumId: Number
});



module.exports = model('userModel', usersSchema, 'users'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME


// {
//   "authId": "0x001",
//   "firstName": "Chris",
//   "lastName": "Jamali",
//   "images": {
//       "0":{
//         "name": "album1",
//         "description": "france",
//         "photos": ["image1.jpg", "image2.png"],
//       },
//       "1":{
//         "name": "album2",
//         "description": "greece",
//         "photos": ["image3.jpg", "image4.png"],
//       },
//   },
//   "favorites": [[0, "image1.jpg"]],
//   "currentAlbumId": 1
// }


// "/users": {
//   methods: ["GET", "POST", "PUT", "DELETE"]
// },
// "albums": {
//   methods: ["GET", "POST", "PUT", "DELETE"]
// },
// "/photos": {
//   methods: ["POST", "DELETE"]
// },
// "/favorites": {
//   methods: ["GET", "POST", "PUT", "DELETE"]
// }

// Users:
// GET: Get one user - need authId
// POST: Add new user - need authId, firstName, lastName, Username, password
// PUT: authId, firstName || lastName || username || password
// DELETE: authId

// Albums:
// GET: authId, images[i] vs name
// // images["i"]
//   // user.images["i"] // { name, photos }
//   // for loop and render img component for user.images[1].photos // ["image3.jpg", "image4.png"]
// POST: authId, images[i] vs name, description
// PUT: authId, images[i] vs name, name, description
// DELETE: authId, images[i] vs name

// Photo:
// GET: DON'T NEED IT
// POST: authId, images[i] vs name, srcUrl (upload on the frontend)
// PUT: DON'T NEED IT 
// DELETE: authId, images[i] vs name, srcUrl

// Favorites:
// Stretch