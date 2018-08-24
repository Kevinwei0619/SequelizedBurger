var connection = require('../config/connection.js');


var orm = {
    showALL:function(tableInput, cb){
      var queryAll = "SELECT * FROM " + tableInput + ";";
      // console.log("queryAll: " , queryAll);
      connection.query(queryAll, function(err , result){
        if(err){
          throw err;
        }
        cb(result)
      });


    },
    creatNew: function(table, col , vals , cb){
      var queryCreate = "INSERT INTO " + table +" (" + col + ") VALUES (" + "?" +") ;"; 

      console.log("queryCreate: " ,queryCreate);

      connection.query(queryCreate, vals , function(err , result){
        if(err){
          throw err;
        }
        cb(result);
      });

    },
    updateOne:function(table , col , bool ,condition , cb){
      var queryUpdate = "UPDATE " + table + " SET " + col + " = " + bool + " WHERE " + condition;
      console.log("queryUpdate : " , queryUpdate);
      connection.query(queryUpdate , function(err ,reault){
        if(err) throw err;
        cb(reault);
      });
    },
    // delete: function(table, condition, cb) {
    //   var queryString = "DELETE FROM " + table;
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // }

    
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;


  function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }