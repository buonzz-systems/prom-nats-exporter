const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyJoin = new Gauge({
	name: 'nats_daily_join',
	help: 'daily successfull signup',
	labelNames: common_labels
});


module.exports = DailyJoin;