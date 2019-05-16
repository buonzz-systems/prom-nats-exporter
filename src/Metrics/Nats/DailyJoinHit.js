const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyJoinHit = new Gauge({
	name: 'nats_daily_join_hit',
	help: 'daily visits to nats pre-join templates',
	labelNames: common_labels
});


module.exports = DailyJoinHit;