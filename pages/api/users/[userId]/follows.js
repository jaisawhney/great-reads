import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  //route to return who follows this user

  //Check if user ID is provided
  if (req.query.userId) {
    var userId = parseInt(req.query.userId);

    const all = await prisma.Follows.findMany({
      where: {
        followingId: userId,
      },
    });

    var allUsers = [];

    for (var i = 0; i < all.length; i++) {
      allUsers.push(all[i].followerId);
    }

    const followsUsers = await prisma.user.findMany({
      where: {
        id: {
          in: allUsers,
        },
      },
    });

    res.status(200).json(followsUsers);
  }
}
