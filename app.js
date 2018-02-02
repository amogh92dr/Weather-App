const yargs = require('yargs');
const geocode = require('./routes/geocode');

const argv = yargs
.options({
	a:{
		demand: true,
		alias: 'address',
		describe: 'Address to fetch the weather for',
		string: true
	}
})
.help().
alias('help','h')
.argv;

geocode.getTemperature(argv.address);
