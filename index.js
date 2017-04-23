
var Monitor = require('ping-monitor');
var IPPower9258 = require('ippower9258');
var config = require('./config.json');


function startMonitor() {
    var reboot = function() {
        console.log(JSON.stringify(ipPower.config));
		ipPower.powerCycle(config.ippower9258.outlet,5);
		
		setTimeout(function(){
		    startMonitor();
		}, config['powercycle_wait'] * (60 * 1000));
    };

	var monitor = new Monitor({
		website: config.host,
		interval: config.interval
	});
 
	monitor.on('down', function (res) {
	    monitor.stop();
		console.log(res.website + ' is down. Rebooting ' + ipPower.config.ipAddress);
	    reboot();
	});
 
	monitor.on('error', function (res) {
	    monitor.stop();
		console.log('Error occured trying to load ' + res.website + '! Rebooting ' + ipPower.config.ipAddress);
	    reboot();
	});
}


var ipPower = new IPPower9258();

ipPower.config.ipAddress = config.ippower9258.ipAddress;
ipPower.config.userName = config.ippower9258.userName;
ipPower.config.password = config.ippower9258.password;

startMonitor();
