import prisma from "../../../lib/prisma";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

// TODO: Protect the other API routes
export default withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res);

  if (req.method === "GET") {
    const allLists = await prisma.BookList.findMany();

    res.status(200).json(allLists);
  } else {
    const body = JSON.parse(req.body);

    const newBookList = await prisma.BookList.create({
      data: {
        title: body.title,
        description: body.description,
        User: {
          connect: {
            auth0Id: user.sub,
          },
        },
      },
    });
    res.status(201).json(newBookList);
  }
});
