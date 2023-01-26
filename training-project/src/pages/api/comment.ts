import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const climb = await prisma.workouts.update({
    where: {
      id: req.body.id,
    },
    data: {
      comments: req.body.comments,
    },
  });
  res.json(climb);
}
