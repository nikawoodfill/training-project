import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const newWorkout = await prisma.workouts.create({
    data: {
      date: req.body.date,
      goal: req.body.goal,
      exercise: [],
      type: req.body.type,
      comments: "",
    },
  });
  res.json(newWorkout);
}
