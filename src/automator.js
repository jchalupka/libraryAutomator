const { Chromeless } = require('chromeless');

function run(signInPage, user, pass) {
  let options = {}
  if (process.env.endpointUrl && process.env.apiKey) {
    options = {
      remote: {
        endpointUrl: process.env.endpointUrl,
        apiKey: process.env.apiKey,
      },
    }
  }

  console.log(options)
  const chromeless = new Chromeless(options);

  return chromeless
    .goto(signInPage)
    .click('#ug-sso_signin')
    .type(user, '#inputUsername')
    .type(pass, '#inputPassword')
    .type('\r')
    .click('#renewAllButton')
    .end();
}

exports.libraryAutomator = run;
