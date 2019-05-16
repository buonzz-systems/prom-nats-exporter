const Gauge = require('prom-client').Gauge;
const common_labels = require('./CommonLabels');

const DailyImpression = new Gauge({
	name: 'nats_daily_impression',
	help: 'Gross number of times a linkcode is hit/visited daily',
	labelNames: common_labels
});


module.exports = DailyImpression;