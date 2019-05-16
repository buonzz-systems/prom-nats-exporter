const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyTrial = new Gauge({
	name: 'nats_daily_trial',
	help: 'daily trial signup',
	labelNames: common_labels
});


module.exports = DailyTrial;