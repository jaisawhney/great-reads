import prisma from "../../../lib/prisma";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { uniqueUsername } from "../../../lib/internalTools.js";

export default withApiAuthRequired(async (req, res) => {
  if (req.method === "GET") {
    // Retrieve all users or return users by username
    const getUser = await prisma.User.findMany({
      where: {
        username: {
          search: req.query.search ? `"${req.query.search}"` : undefined,
        },
      },
    });
    res.status(200).json(getUser);
  } else {
    req.body = JSON.parse(req.body);
    const ourUser = await prisma.User.findUnique({
      where: {
        auth0Id: req.body.userId,
      },
    });

    if (ourUser) return res.status(200).json(ourUser);
    await prisma.User.create({
      data: {
        auth0Id: req.body.userId,
        email: req.body.email,
        username: await uniqueUsername(),
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
});
