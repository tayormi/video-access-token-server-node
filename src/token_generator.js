require('dotenv').load();

const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function tokenGenerator(identity, room) {
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    'ACa3fccdfe1b155379db9ed5bcc507eb69',
    'SKdda5984070c63e1947dccd82fa5c0f38',
    'y75lZlDYXNpZbI0BWUvbNKfAbzVuakna'
  );

  // Assign identity to the token
  token.identity = identity;

  // Grant the access token Twilio Video capabilities
  const grant = new VideoGrant();
  grant.room = room;
  token.addGrant(grant);

  // Serialize the token to a JWT string
  return token.toJwt();
}

module.exports = tokenGenerator;
