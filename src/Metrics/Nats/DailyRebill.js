const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyRebill = new Gauge({
	name: 'nats_daily_rebill',
	help: 'daily rebills',
	labelNames: common_labels
});


module.exports = DailyRebill;