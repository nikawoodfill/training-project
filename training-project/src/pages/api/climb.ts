import prisma from "../../../lib/prisma";
export default async function handle(req, res) {
  const comment = await prisma.workouts.update({
    where: {
      id: req.body.id,
    },
    data: {
      exercise: {
        push: {
          grade: req.body.exercise.grade,
          attempts: parseInt(req.body.exercise.attempts),
          completed: req.body.exercise.completed,
        },
      },
    },
  });
  res.json(comment);
}
