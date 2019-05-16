
const DailySiteStats = require('./DailySiteStats');

module.exports = [
     {"scraper": DailySiteStats, "interval": 60000 * parseInt(process.env.DAILY_SITE_STATS_SCRAPE_INTERVAL) },     
];