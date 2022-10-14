import prisma from "prisma";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(FollowSomeone);

async function FollowSomeone(req, res) {
  const { user } = getSession(req, res);
  console.log(user);
  if (req.method === "GET") {
    //If get then just return ok
    res.status(200).json({ ok: "opk" });
  } else {
    const userToFollow = req.query.userId;

    //Check if user we wish to follow exists

    const existUser = await prisma.User.findFirst({
      followingId: userToFollow,
    });
    //Return user not found

    if (!existUser) return res.status(404).end();

    // Check if this user is already following
    /*const existingFolow = await prisma.follows.findFirst({
          
        });*/

    // User exists (200)
    if (existingFolow) return res.status(200).end();

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
    return res.status(201).end();
  }
}
