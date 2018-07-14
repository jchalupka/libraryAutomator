const { libraryAutomator }  = require('../automator')

const {
  SIGN_IN_PAGE,
  USER_NAME,
  PASSWORD,
} = process.env

libraryAutomator(SIGN_IN_PAGE, USER_NAME, PASSWORD)
  .then(() => console.log('completed'))
  .catch(err => console.error(err))