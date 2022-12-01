const mongoose = require('mongoose')

const ipSchema = new mongoose.Schema({
    ip: {type: String,default: "UK"},
    network: {type: String,default: "UK"},
    version: {type: String,default: "UK"},
    city:{type: String,default: "UK"},
    region:{type: String,default: "UK"},
    region_code:{type: String,default: "UK"},
    country:{type: String,default: "UK"},
    country_name:{type: String,default: "UK"},
    country_code:{type: String,default: "UK"},
    country_code_iso3:{type: String,default: "UK"},
    country_capital:{type: String,default: "UK"},
    country_tld:{type: String,default: "UK"},
    continent_code:{type: String,default: "UK"},
    postal:{type: String,default: "UK"},
    latitude:{type: String,default: "UK"},
    longitude:{type: String,default: "UK"},
    timezone:{type: String,default: "UK"},
    utc_offset:{type: String,default: "UK"},
    country_calling_code:{type: String,default: "UK"},
    currency:{type: String,default: "UK"},
    currency_name:{type: String,default: "UK"},
    org:{type: String,default: "UK"}
})
module.exports = mongoose.model('ip', ipSchema)