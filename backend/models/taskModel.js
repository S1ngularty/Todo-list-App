const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  description: String,
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "low",
  },
  status: {
    type: String,
    enum: ["in_progress", "blocked", "completed", "cancelled"],
    default: "in_progress",
  },
  completedAt: Date,
});

module.exports = mongoose.model("Task", taskSchema);
