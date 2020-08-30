var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (colNewVal, condition, cb) {
        orm.updateOne("burgers", colNewVal, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;