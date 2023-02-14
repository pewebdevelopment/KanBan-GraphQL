const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  iconURL: {
    type: String,
    required: false,
  },

  assignedTo: {},

  progress: {},

  tags: {
    type: Array,

    default: "Default",
  },

  createdAt: {
    type: Date,
    default: Date.now,
    unique: true,
    required: true,
  },

  updatedAt: {
    type: [{ Date }],
    default: Date.now,
    unique: true,
    required: true,
  },

  dueAt: {
    type: [{ Date }],
    unique: true,
    required: false,
  },

  comments: {
    type: [{ Object }],
    required: false,
  },

  status: {
    type: String,
    enum: [
      "Planned",
      "Created",
      "Assigned",
      "InProgress",
      "Completed",
      "Archived",
    ],
    default: "Planned",
  },
});

module.exports = mongoose.model("Task", taskSchema);

// naming like this is a convention
