import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const getUser = prisma.User.findUnique({
      where: {
        email: req.body.email,
      },
    });
    res.status(200).json(getUser);
  } else {
    const getUser = await prisma.User.findUnique({
      where: {
        //email: req.body.email,
        auth0Id: req.body.userId,
      },
    });

    if (getUser) return res.status(200).end();
    await prisma.User.create({
      data: {
        auth0Id: req.body.userId,
        email: req.body.email,
        bookList: {
          create: [
            { title: "Reading", description: "Books you are reading" },
            { title: "Past Reads", description: "Books you've read" },
            { title: "To-Do", description: "Books you plan to read" },
            { title: "Recommended", description: "Recommended books" },
          ],
        },
      },
    });
    return res.status(201).json(req.body);
  }
}
