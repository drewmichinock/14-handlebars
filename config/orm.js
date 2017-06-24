// import mysql connection
var connection = require("../config/connection.js");

// helper function for sql syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// object for sql statement functions
var orm = {

};

// create methods

// selectAll()
// insertOne()
// updateOne()

// export orm
module.exports = orm;