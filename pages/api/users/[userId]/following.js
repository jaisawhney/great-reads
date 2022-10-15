import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  //route to return who this user is following

  //Check if user ID is provided
  if (req.query.userId) {
    var userId = parseInt(req.query.userId);

    const all = await prisma.Follows.findMany({
      where: {
        followerId: userId,
      },
    });

    var allUsers = [];

    for (var i = 0; i < all.length; i++) {
      allUsers.push(all[i].followingId);
    }

    const followingUsers = await prisma.user.findMany({
      where: {
        id: {
          in: allUsers,
        },
      },
    });

    res.status(200).json(followingUsers);
  }
}
