import mongoose = require('mongoose')
import assert = require('assert')

mongoose.Promise = global.Promise;


var db, Market_Dataset, Market_Info, Market_Type

export function config(database) {
    db = database
    SaveDatasetModel()
}

// ----------------------------------------------- QUERY MODELS -----------------------------------------

export function insertDataset(data) {
    var dataset = new Market_Dataset({
        name: data.Name,
        symbol: data.Symbol,
        open: data.Open,
        daysHigh: data.DaysHigh,
        daysLow: data.DaysLow,
        yearHigh: data.YearHigh,
        yearLow: data.YearLow,
        marketCapitalization: data.MarketCapitalization,
        volume: data.Volume,
        averageDailyVolume: data.AverageDailyVolume,
        peRatio: data.PERatio,
        lastTradePriceOnly: data.LastTradePriceOnly,
        change: data.Change,
        realtime_price: data.realtime_price,
        realtime_change: data.realtime_change,
        realtime_chg_percent: data.realtime_chg_percent,
        eps_curr_year: data.eps_curr_year,
        realtime_ts: data.realtime_ts,
        ts: data.ts
    });

    var promise = dataset.save();
}

// ----------------------------------------------- SCHEMAS -----------------------------------------


function SaveDatasetModel() {
    var datasetSchema = mongoose.Schema({
        name: String,
        symbol: String,
        open: Number,
        daysHigh: Number,
        daysLow: Number,
        yearHigh: Number,
        yearLow: Number,
        marketCapitalization: String,
        volume: Number,
        averageDailyVolume: String,
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

    Market_Dataset = db.model('Market_Datasets', datasetSchema)
}

function SaveMarketInfoModel() {
    var marketSchema = mongoose.Schema({
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

    Market_Info = db.model('Market_Info', marketSchema)
}