const request = require('request');

const getWeatherData = (geolocation, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=20bd456330f237b24b1891145f6da7da&query=${geolocation.latitude},${geolocation.longitude}`;
  request({ url: weatherURL, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.current === undefined) {
      callback('Improper addrsss provided', undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature} degree out. There is a ${body.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = getWeatherData;
