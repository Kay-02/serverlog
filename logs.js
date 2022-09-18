

fs= require('fs');
const lognew= require('./lognew');
module.exports = lognew();

function log(message) 
 {
    msg=message+"\n";
    fs.appendFile('error.txt', msg , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
 }
 
  log(lognew);
 log("this is an error")