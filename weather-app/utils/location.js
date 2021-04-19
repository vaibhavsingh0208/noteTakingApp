const request = require('request');

const getGeoLocation = (address, callback) => {
  const locationURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmF2czAyMDgiLCJhIjoiY2tubzNubzJpMHV5NTJubzVwd2hqOWdyeCJ9.ThJEDLGz3CPUu0qWJIaqpw`;
  request({ url: locationURL, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service', undefined);
    } else if (!body.features.length) {
      callback('Location Address not correct', undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      callback(undefined, { latitude, longitude });
    }
  });
};

module.exports = getGeoLocation;
