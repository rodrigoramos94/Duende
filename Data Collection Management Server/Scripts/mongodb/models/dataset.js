"use strict";
const mongoose = require("mongoose");
exports.datasetSchema = mongoose.Schema({
    name: String,
    symbol: String,
    open: Number,
    daysHigh: Number,
    daysLow: Number,
    yearHigh: Number,
    yearLow: Number,
    marketCapitalization: Number,
    volumen: Number,
    averageDailyVolume: Number,
    peRatio: Number,
    lastTradePriceOnly: Number,
    change: Number,
    realtime_price: Number,
    realtime_change: Number,
    realtime_chg_percent: Number,
    eps_curr_year: Number,
    realtime_ts: Date,
    ts: Date
});
//# sourceMappingURL=dataset.js.map