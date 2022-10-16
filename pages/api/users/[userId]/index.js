import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  const userId = parseInt(req.query.userId);

  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    res.status(200).json(user);
  } else {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json(deletedUser);
  }
}
