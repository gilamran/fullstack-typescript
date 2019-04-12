module.exports = {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  SERVER_PORT: process.env.PORT || 3000,
  WEBPACK_PORT: 8080,
};
