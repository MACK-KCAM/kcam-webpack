const { Types } = require('mongoose');
const router = require('../router');
const { photos } = require('../../models');
const { imgUpload } = require('../../middlewares/uploads/imgUpload');
// const { imgUpload } = require('../../middlewares/uploads/imgUpload.js');

router.route('/photos')
    .get(async (req, res) => {
      console.log(`Received ${req.method} request at api/photos`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      try {
        // FETCH ALL WATCHED NFT METADATA ASSOCIATED WITH USER ID
        const response = await photos.find({ });
        console.log('Documents successfully retrieved from MongoDB');
        res.json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull GET request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .post(async (req, res) => {
      console.log(`Received ${req.method} request at api/photos`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // RUN REQUEST THROUGH MIDDLEWARE
      // const imgUrl = await imgUpload(req); // return string of URL
      // SAVE POSTED METADATA IN WATCHED COLLECTION
      const { authId, images, favorites, firstName, lastName } = req.body;
        const Attempt = new photos({ _id: Types.ObjectId(), authId, images, favorites, firstName, lastName });
        try {
          const saveAttempt = await Attempt.save();
          console.log(`Document successfully stored in MongoDB ${authId}`);
          res.status(201).json(saveAttempt);
        } catch (err) {
          const error = {
            status: 500,
            message: `Unable to fulfull POST request: ${err}`
          };
          console.log(err);
          res.status(error.status).json(error);
        }
    })
    .put(async (req, res) => {
      console.log(`Received ${req.method} request at api/photos`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DECONSTRUCT REQ.BODY OBJECT FOR SECURITY PURPOSES
      const { authId, images, favorites, firstName, lastName } = req.body;
      // RECONSTRUCT PARAMS OBJECT TO DELETE PROPERTIES WITH UNDEFINED VALUES TO PREVENT OVERWRITING WITH NULL
      const params = { authId, images, favorites, firstName, lastName };
      for (const prop in params) if(!params[prop]) delete params[prop];
      try {
        const response = await photos.findOneAndUpdate({ authId: authId }, params, { upsert: true, useFindAndModify: false })
        console.log(`Document successfully updated in MongoDB: ${authId}`);
        res.status(200).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull PUT request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .delete(async (req, res) => {
      console.log(`Received ${req.method} request at api/photos`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DELETE NFT METADATA BY TOKENID
      const { tokenId } = req.body;
      try {
        const response = await photos.deleteOne({ authId: authId });
        console.log(`Document successfully deleted from MongoDB: ${authId}`);
        res.status(200).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull DELETE request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    });

module.exports = router;
