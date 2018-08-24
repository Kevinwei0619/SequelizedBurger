var express = require('express');
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
var router = express.Router();

router.get("/", function (req, res) {
      burger.all(function (data) {
            var showObject = {
                  burgers: data
            };
// console.log(showObject);
res.render("index" , showObject);
      });
});

router.post("/api/burgers" , function(req , res){
      // console.log("req.body: " , req.body.newburgerName);
      burger.create("burger_name" , req.body.newburgerName ,function(result){

            res.json({id:result.insertId});
      });
});




router.put("/api/burgers/:id" , function(req, res){
  var condition = "id = " + req.params.id;
  console.log("req.body.newDevoured: " , req.body.devoured);
  console.log(condition);
  burger.update("devoured" ,
      req.body.devoured
  ,condition , function(result){
      if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
  })


});






//   router.post("/api/cats", function(req, res) {
//     cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
// Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });

//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update(
//       {
//         sleepy: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
// If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
//       }
//     );
//   });

module.exports = router;