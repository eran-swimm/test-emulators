const functions = require('firebase-functions');

exports.helloWorld = functions.https.onCall(async (data, context) => {
  console.log(`helloWorld context.auth = ${context.auth}`);
  return {
    auth: context.auth
  };
});

