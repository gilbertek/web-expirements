const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Current condition in ${location}:`)
    console.log(`\t${weather.condition.temp}º ${weather.condition.text})`)
  } catch (err) {
    /* handle error */
    spinner.stop()
    console.error(err)
  }
}
