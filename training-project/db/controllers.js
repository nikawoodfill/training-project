const Workouts = require("./db.js");

exports.addWorkout = (req, res) => {
  return Workouts.create({
    date: req.body.date,
    goal: req.body.goal,
    type: req.body.type,
    exercise: req.body.exercise,
    hang: req.body.hang,
    comments: req.body.comments,
  }).then((result) => {
    res.status(200).send(result);
  });
};

exports.getWorkout = (req, res) => {
  return Workouts.find({})
    .sort({ date: -1 })
    .then((data) => {
      res.status(200).send(data);
    });
};

exports.addComment = (req, res) => {
  return Workouts.findByIdAndUpdate(req.body.id, {
    comments: req.body.comments,
  }).then((result) => {
    res.status(200).send(result);
  });
};

exports.addClimb = (req, res) => {
  return Workouts.updateOne(
    { _id: req.body.id },
    { $push: { exercise: req.body.exercise } }
  ).then((result) => {
    res.status(200).send(result);
  });
};
