const IS_DEV = process.env.NODE_ENV !== 'production';

const findUp = require('find-up');

if (IS_DEV) {
  require('dotenv').config({ path: findUp.sync('.env') });
}

const { version: VERSION } = require(findUp.sync('package.json'));

// server
const SERVER_PORT = process.env.PORT || 3001;
const WEBPACK_PORT = 8086; // For dev environment only

export {
  IS_DEV,
  VERSION,
  SERVER_PORT,
  WEBPACK_PORT,
};
