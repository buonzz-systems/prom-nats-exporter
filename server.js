'use strict';


const express = require('express');
const server = express();
const register = require('prom-client').register;
const logger = require("./src/logger");
const today = new Date();

require('dotenv').config();

// import collectors
const collectors = require('./src/Metrics');


logger.log({
  level: 'info',
  message: 'Initializing'
});

logger.log({
  level: 'info',
  message: 'Server Time: ' + today
});

// start the metric collectors
for(const i in collectors){
  const collector = collectors[i];
    setInterval(() => {
        collector.scraper.calculate();
    }, collector.interval);
}



// expose metrics
server.get('/metrics', (req, res) => {
	res.set('Content-Type', register.contentType);
	res.end(register.metrics());
});

logger.log({
  level: 'info',
  message: 'Prometheus Exporter for NATS listening to ' + process.env.PORT + ', metrics exposed on /metrics endpoint'
});


server.listen(process.env.PORT);