const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyInitial = new Gauge({
	name: 'nats_daily_initial',
	help: 'daily initial joins',
	labelNames: common_labels
});


module.exports = DailyInitial;