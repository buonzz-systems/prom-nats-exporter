const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyChargeback = new Gauge({
	name: 'nats_daily_chargeback',
	help: 'daily chargebacks',
	labelNames: common_labels
});


module.exports = DailyChargeback;