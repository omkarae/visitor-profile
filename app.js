require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const https = require('node:https');
// const http = require('http');
const app = express();
const requestIp = require('request-ip');
const ipDB = require('./models/ip');
app.set("view engine","ejs");
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
  })


app.use(requestIp.mw({ attributeName : 'clientIp' }));
app.get("/",async function(req,res){
    var ip = "8.8.8.8";
    ip = req.clientIp;
    console.log(ip);
    const options = {
        path: '/' + ip + '/json/',
        host: 'ipapi.co',
        port: 443,
        headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
      };
      console.log(options);
      https.get(options, function(resp){
          var body = ''
          resp.on('data', function(data){
              body += data;
          });
      
          resp.on('end', async function(){
              var loc = JSON.parse(body);
              const city = loc.city;
              const country = loc.country_name;
              const region = loc.region;
              await ipDB.create({ ip: loc.ip, network:loc.network, version:loc.version, city: loc.city, region: loc.region, region_code:loc.region_code, country: loc.country, country_name:loc.country_name, country_code:loc.country_code, country_code_iso3:loc.country_code_iso3, country_capital:loc.country_capital, country_tld:loc.country_tld, continent_code:loc.continent_code, postal:loc.postal, latitude:loc.latitude, longitude:loc.longitude, timezone:loc.timezone, utc_offset:loc.utc_offset, country_calling_code:loc.country_calling_code, currency:loc.currency, currency_name:loc.currency_name, org:loc.org});
              res.render("index",{ip:ip,city:city,country:country,region:region});
          });
          
      });
    console.log(ip);
    });



app.listen(3000, function () {
    console.log('Server is running on port 3000')
    });