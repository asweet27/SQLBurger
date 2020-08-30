const express = require("express");
const burger = require("../models/burger.js");


let router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = `id=${req.params.id}`;
    console.log(`Condition: ${condition}`);

    burger.updateOne("devoured=true", condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;