const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyCancel = new Gauge({
	name: 'nats_daily_cancel',
	help: 'daily cancellation',
	labelNames: common_labels
});


module.exports = DailyCancel;