import prisma from "../../../../lib/prisma";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(UnfollowSomeone);

async function UnfollowSomeone(req, res) {
  const { user } = getSession(req, res);
  const userToUnfollowId = parseInt(req.query.userId);
  const userToUnfollow = await prisma.User.findFirst({ where: { id: userToUnfollowId } });

  if (userToUnfollow) {
    // Create Connection if does not exist
    const unfollowTransaction = await prisma.follows.delete({
      where: {
        followerId_followingId: {
          followerId: user.internalId,
          followingId: userToUnfollowId,
        },
      },
    });

    // Return follow transaction
    return res.status(200).json(unfollowTransaction);
  }

  // User not found
  return res.status(401).json({ status: 401 });
}
