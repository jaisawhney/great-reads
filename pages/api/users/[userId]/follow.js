import prisma from "../../../../lib/prisma";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(FollowSomeone);

async function FollowSomeone(req, res) {
  const { user } = getSession(req, res);
  const userToFollowId = parseInt(req.query.userId);
  const userToFollow = await prisma.User.findFirst({ where: { id: userToFollowId } });

  if (userToFollow) {
    // Create Connection if does not exist
    const followTransaction = await prisma.follows.upsert({
      where: {
        followerId_followingId: {
          followerId: user.internalId,
          followingId: userToFollowId,
        },
      },
      update: {},
      create: {
        followerId: user.internalId,
        followingId: userToFollowId,
      },
    });

    // Return follow transaction
    return res.status(201).json(followTransaction);
  }

  // User not found
  return res.status(401).json({ status: 401 });
}
