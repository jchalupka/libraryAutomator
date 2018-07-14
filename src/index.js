const { libraryAutomator } = require('./automator');

exports.handler = (event, context, callback) => {
  const {
    SIGN_IN_PAGE,
    USER_NAME,
    PASSWORD,
  } = process.env;

  if (!(SIGN_IN_PAGE || USER_NAME || PASSWORD)) {
    callback(new Error('Missing required environement variables: SIGN_IN_PAGE, USER_NAME, PASSWORD'));
  }

  libraryAutomator(SIGN_IN_PAGE, USER_NAME, PASSWORD)
    .then(() => callback(null, 'completed'))
    .catch(reason => callback(reason));
};
