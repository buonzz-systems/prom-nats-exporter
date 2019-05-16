
const logger = require("../logger");
const request = require('request');

const NatsMetrics = require('./Nats');
const NatsInstallations = require('./Nats/Installations');

function calculate(){

	for(const item of NatsInstallations){
		let options = {
		    url: item.api_url + '/api/report/profitloss',
		    method: 'GET',
		    qs: {
		        'view': 'site',
		        'period': 2
		    },
		    json: true,
		    headers: {
		        'api-key': item.api_key,
		        'api-username': item.api_username
		    }
		};

		request(options, call_process_stats({
			nats_install: item.api_url
		}));
	}// for

} // calculate

function call_process_stats(params){
	return function process_stats(error, response, body){
	    if (!error && response.statusCode == 200) {
	       	logger.log({
			  level: 'info',
			  message: '[DailySiteStats] result is OK, setting the gauges... '
			});

			for (const item of body.rows) {

				NatsMetrics.DailyCancel.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.cancel));

				NatsMetrics.DailyChargeback.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.chargeback));

				NatsMetrics.DailyExpire.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.expire));

				NatsMetrics.DailyImpression.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.impression));

				NatsMetrics.DailyInitial.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.initial));

				NatsMetrics.DailyJoin.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.joins));

				NatsMetrics.DailyJoinHit.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.join_hits));

				NatsMetrics.DailyJoinSubmit.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.join_submits));

				NatsMetrics.DailyRebill.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.rebill));

				NatsMetrics.DailyRefund.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.refunds));

				NatsMetrics.DailyTrial.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.trial));

				NatsMetrics.DailyVisitor.set({ 
						nats_install: params.nats_install, 
						siteid: item.break, 
						site_name: item.site_name
					   }, parseInt(item.stats.visitor));

			} // foreach

			logger.log({
			  level: 'info',
			  message: '[DailySiteStats] done setting the gauges... '
			});

	    } // if ok
	    else{
	       	logger.log({
			  level: 'error',
			  message: '[DailySiteStats] results has error' + body
			});
	    } // error
	} // process stats
} // call process stats

module.exports = {
	calculate: calculate
};