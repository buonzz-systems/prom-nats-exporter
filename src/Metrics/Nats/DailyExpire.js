const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyExpire = new Gauge({
	name: 'nats_daily_expire',
	help: 'daily expired members',
	labelNames: common_labels
});


module.exports = DailyExpire;