import prisma from "../../../../lib/prisma";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(FollowSomeone);

async function FollowSomeone(req, res) {
  const { user } = getSession(req, res);

  const userToFollow = parseInt(req.query.userId);

  //Get our own user to get our user ID
  const thisUser = await prisma.User.findUnique({
    where: { auth0Id: user.sub },
  });
  //Check if user we wish to follow exists
  const existUser = await prisma.User.findFirst({
    where: {
      id: parseInt(userToFollow),
    },
  });

  //check if we are already following this user
  const existFolowing = await prisma.Follows.findFirst({
    where: {
      followerId: thisUser.id,
      followingId: userToFollow,
    },
  });
  if (existFolowing) return res.status(200).json({ status: 200 });

  //Return user not found
  if (!existUser) return res.status(401).json({ status: 401 });

  //Add to the follows table
  const newFollow = await prisma.Follows.create({
    data: {
      follower: {
        connect: {
          auth0Id: user.sub,
        },
      },
      following: {
        connect: {
          id: userToFollow,
        },
      },
    },
  });

  // Follow added added (201)
  return res.status(201).json(newFollow);
}
