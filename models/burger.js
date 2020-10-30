// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // TODO: remove this comment. This comment serves no purpose.
  createOne: function(cols, vals, cb) {
    orm.createOne("burger", cols, vals, function(res) {
      console.log("I am in the model, passing the following stuff to the orm");
      console.log(`${cols} ${vals}`)
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // deleteOne: function(condition, cb) {
  //   orm.delete("burger", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;