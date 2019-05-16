const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyVisitor = new Gauge({
	name: 'nats_daily_visitor',
	help: 'Unique IPs that had visited the linkcodes daily',
	labelNames: common_labels
});


module.exports = DailyVisitor;