const lognew= require('./lognew');
module.exports = lognew();

var fs = require('fs');

// let log_data = 



fs.appendFile("loglist.txt", log_data, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("\nFile updated",
        fs.readFileSync("log_list.txt", "utf8"));
    }
  });