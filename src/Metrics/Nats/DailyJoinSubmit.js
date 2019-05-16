const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyJoinSubmit = new Gauge({
	name: 'nats_daily_join_submit',
	help: 'daily submission to pre-join templates',
	labelNames: common_labels
});


module.exports = DailyJoinSubmit;