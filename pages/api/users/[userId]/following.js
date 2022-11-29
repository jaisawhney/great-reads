import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  // Route to return who this user is following
  const userId = parseInt(req.query.userId);

  const usersFollowingIds = await prisma.follows.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const usersFollowing = await prisma.user.findMany({
    where: {
      id: { in: usersFollowingIds.map((follower) => follower.followingId) },
    },
  });

  res.status(200).json(usersFollowing);
}
