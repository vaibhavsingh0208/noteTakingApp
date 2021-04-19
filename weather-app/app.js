const yargs = require('yargs');
const getGeoLocation = require('./utils/location');
const getWeatherData = require('./utils/weather');

yargs.command({
  command: 'getWeather',
  describe: 'Getting weather info',
  builder: {
    address: {
      describe: 'location',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argsv => {
    getWeatherInfo(argsv.address);
  }
});

const getWeatherInfo = address => {
  getGeoLocation(address, (locationError, locationResponse) => {
    if (locationError) {
      console.log(locationError);
    } else {
      getWeatherData(locationResponse, (weatherError, weatherResponse) => {
        if (weatherError) {
          console.log(weatherError);
        } else {
          console.log(weatherResponse);
        }
      });
    }
  });
};

yargs.parse();
