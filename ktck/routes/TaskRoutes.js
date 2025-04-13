const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/search", async (req, res) => {
    const { query, status, date_from, date_to } = req.query;
    let filter = {};

    if (query) filter.$or = [{ title: new RegExp(query, "i") }, { description: new RegExp(query, "i") }];
    if (status) filter.status = status;
    if (date_from && date_to) filter.dueDate = { $gte: new Date(date_from), $lte: new Date(date_to) };

    const tasks = await Task.find(filter);
    res.render("index", { tasks });
});

module.exports = router;

router.get("/tasks/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render("detail", { task });
});
