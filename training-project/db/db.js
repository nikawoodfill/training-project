const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/trainingproject");

const schema = new mongoose.Schema({
  date: Date,
  goal: String,
  type: String,
  exercise: [{ grade: String, attempts: Number, completed: Boolean }],
  comments: String,
});
const Workouts = mongoose.model("Workouts", schema);

module.exports = Workouts;
