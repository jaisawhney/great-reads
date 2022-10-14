import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  //route to return who follows this user

  //Check if user ID is provided
  if (req.query.userId) {
    var userId = parseInt(req.query.userId);

    const all = prisma.Follows.findMany({
      where: {
        followingId: userId,
      },
    });

    res.status(200).json(all);
  }
}
