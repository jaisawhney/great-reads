import prisma from "../../../../../lib/prisma";

export default async function handler(req, res) {
  const userId = req.query.userId;

  if (req.method === "GET") {
    // Get the user's shelves
    const userShelves = await prisma.BookList.findMany({
      where: {
        User: {
          auth0Id: userId,
        },
      },
      include: { User: true },
    });

    res.status(200).json(userShelves);
  }
}
