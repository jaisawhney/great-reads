import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const getUser = await prisma.User.findMany({});
    res.status(200).json(getUser);
  } else {
    console.log(req.body);
    const getUser = await prisma.User.findFirst({
      where: {
        auth0Id: req.body.userId,
      },
    });

    if (getUser) return res.status(200).json(getUser);
    await prisma.User.create({
      data: {
        auth0Id: req.body.userId,
        email: req.body.email,
        bookList: {
          create: [
            { title: "Reading", description: "Books you are reading" },
            { title: "Past Reads", description: "Books you've read" },
            { title: "To-Read", description: "Books you plan to read" },
            { title: "Recommended", description: "Recommended books" },
          ],
        },
      },
    });
    return res.status(201).json(req.body);
  }
}
