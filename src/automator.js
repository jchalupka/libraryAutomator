const { Chromeless } = require('chromeless');

function run(signInPage, user, pass) {
  let options = {}
  const { endpointUrl, apiKey } = process.env
  if ((endpointUrl && apiKey)) {
    options = { remote: { endpointUrl, apiKey } };
  }

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
