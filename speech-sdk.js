const sdk = require("microsoft-cognitiveservices-speech-sdk");

const speechConfig = sdk.SpeechConfig.fromSubscription(
  "<paste-your-speech-key-here>",
  "<paste-your-speech-location/region-here>"
);
