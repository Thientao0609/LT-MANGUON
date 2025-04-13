const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ["New", "Pending", "Done"], default: "New" },
    dueDate: Date,
    points: Number
});

module.exports = mongoose.model("Task", taskSchema);

