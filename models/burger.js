
var orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var burger = {

  all:function(cb){
    orm.showALL("burgers" , function(res){
      cb(res);
    });
  },
  create: function(cols , vals , cb){
    orm.creatNew("burgers" ,cols , vals , function(res){
      console.log("vals: ",vals)
      cb(res);

    } );
  },
  update: function(col , bool , condition , cb){
    orm.updateOne("burgers" ,col , bool , condition , function(res){
      cb(res);
    } );


  }

  };

module.exports = burger;
