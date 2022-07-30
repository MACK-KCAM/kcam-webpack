const logger = require('./logger');
const checkMethod = require('./checkMethod');

// THESE MIDDLEWARES RUN BEFORE THE CONTROLLERS DO
  // THESE MIDDLEWARES ARE EXECUTED IN ORDER
module.exports = {
    checkMethod,
    logger
};
