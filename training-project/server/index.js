const express = require("express");
const app = express();
app.use(express.json());
const controllers = require("../db/controllers.js");
app.use(express.static(__dirname + "/../client/dist"));

let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

app.post("/workouts", controllers.addWorkout);

app.get("/workouts", controllers.getWorkout);

app.post("/comments", controllers.addComment);

app.post("/climb", controllers.addClimb);
