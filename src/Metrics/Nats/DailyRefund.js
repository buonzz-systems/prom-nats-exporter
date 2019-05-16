const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyRefund = new Gauge({
	name: 'nats_daily_refund',
	help: 'daily refund',
	labelNames: common_labels
});


module.exports = DailyRefund;